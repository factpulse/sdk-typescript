# StatutTache

Description complète du statut d\'une tâche asynchrone.  Le champ `statut` indique l\'état Celery de la tâche. Quand `statut=\"SUCCESS\"`, consultez `resultat.statut` pour le résultat métier (\"SUCCES\" ou \"ERREUR\").

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_tache** | **string** |  | [default to undefined]
**statut** | [**StatutCelery**](StatutCelery.md) | Statut Celery de la tâche (PENDING, STARTED, SUCCESS, FAILURE, RETRY) | [default to undefined]
**resultat** | **{ [key: string]: any; }** |  | [optional] [default to undefined]

## Example

```typescript
import { StatutTache } from '@factpulse/sdk';

const instance: StatutTache = {
    id_tache,
    statut,
    resultat,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
