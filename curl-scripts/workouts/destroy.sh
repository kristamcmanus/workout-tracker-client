API="https://safe-headland-27184.herokuapp.com"
URL_PATH="/workouts"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Bearer ${TOKEN}"

echo
