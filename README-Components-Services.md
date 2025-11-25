# Components

	ng generate component component-didyouknow

## App Routes (app.routes.ts)

Adicionar import do seu component para ser usado no router

	import { ComponentDidyouknow } from './component-didyouknow/component-didyouknow';

Adicionar ao routes

	export const routes: Routes = [
		{ path: '', component: ComponentDidyouknow }
	];

# Services

	ng generate services service-didyouknow

## App Config (app.config.ts)

Adicionar import para usar um serviço http com ao buscar a api

	import { provideHttpClient } from '@angular/common/http';

Adicionar ao providers

	providers: [
		provideHttpClient()
	]

