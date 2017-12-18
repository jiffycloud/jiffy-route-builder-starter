import { RouteBuilder } from 'jiffy-route-builder';

function createWidget(request) {
  return Promise.resolve({
    status: 200,
    body: `Created widget ${JSON.stringify(request.body)}`
  });
}

function getWidget(request, params) {
  return Promise.resolve({
    status: 200,
    body: {
      id: params['id']
    }
  })
}

let builder = new RouteBuilder();
builder.setCatchAllOptions(true);
builder.add('/widgets', createWidget, 'POST');
builder.add('/widgets/:id', getWidget);
export var endpoint = builder.build();
