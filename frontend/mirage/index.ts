import { createServer, Model } from 'miragejs';
import { pantryItems } from '~/data';

export function makeServer({ environment = 'test' } = {}) {
  let server = createServer({
    environment,
    models: {
      pantryItem: Model,
    },

    seeds(server) {
      // map pantryItems to mirage models
      pantryItems.forEach((pantryItem) => {
        server.create('pantryItem', pantryItem);
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/pantryItems', (schema) => {
        return schema.pantryItems.all();
      });
    },
  });

  return server;
}
