API="https://safe-headland-27184.herokuapp.com"
URL_PATH="/workouts"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "workout": {
      "name": "'"${NAME}"'",
      "description": "'"${DESCRIPTION}"'",
      "duration": "'"${DURATION}"'",
      "date": "'"${DATE}"'"
    }
  }'

echo
