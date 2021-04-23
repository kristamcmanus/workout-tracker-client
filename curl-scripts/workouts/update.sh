API="http://localhost:7165"
URL_PATH="/workouts"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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