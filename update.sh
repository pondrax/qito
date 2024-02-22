#!/bin/bash

CRON_JOB="* * * * * cd $(pwd) && bash update.sh"
CRON_JOB_ESCAPED=$(printf "%q" "$CRON_JOB")

if ! crontab -l | grep -Fq -- "$CRON_JOB"; then
  (crontab -l 2>/dev/null; echo "$CRON_JOB") | crontab -
  echo "installing crontab"
fi

# log_rebuild_time.sh
# Function to log the timestamp and calculate elapsed time
function log_and_measure_time() {
  echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1" >> rebuild_time.log
}

# Check if there are any updates in the Git repository
git fetch

UPSTREAM=${1:-'@{u}'}
LOCAL=$(git rev-parse @)
REMOTE=$(git rev-parse "$UPSTREAM")
BASE=$(git merge-base @ "$UPSTREAM")

if [ $LOCAL = $REMOTE ]; then
  echo "Up-to-date"
elif [ $LOCAL = $BASE ]; then
  echo "Need to pull"
  git pull
  # Log the start time
  log_and_measure_time "Rebuild started"

  # build then run updated image
  docker-compose up -d --build

  # Log the end time and calculate the elapsed time
  log_and_measure_time "Rebuild ended"
  end_time=$(date '+%s')
  start_time=$(date -d "$(grep 'Rebuild started' rebuild_time.log | tail -n1 | cut -c 2-20)" '+%s')
  elapsed_time=$((end_time - start_time))

  # Log the elapsed time
  log_and_measure_time "Elapsed time: ${elapsed_time} seconds"
elif [ $REMOTE = $BASE ]; then
  echo "Need to push"
else
  echo "Diverged"
fi
# UPDATES=$(git rev-list HEAD..origin/master)

# # Exit early if there are no updates
# if [ -z "$UPDATES" ]; then
#   echo "No updates found in the repository."
#   # log_and_measure_time "No updates found in the repository."
#   exit 0
# fi