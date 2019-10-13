development-setup-env:
	ansible-playbook ansible/development.yml -i ansible/development -vv

app:
	docker-compose up

app-build:
	docker-compose build

app-bash:
	docker-compose run api bash

app-setup: app-build
	docker-compose run api npm install
	docker-compose run api npm run sequelize db:migrate


app-setup-old: app-build
	docker-compose run api npm install
	docker-compose run api npm run webpack -- -p --env production
	docker-compose run api npm run sequelize db:migrate
	ansible-playbook ansible/development.yml -i ansible/development -vv