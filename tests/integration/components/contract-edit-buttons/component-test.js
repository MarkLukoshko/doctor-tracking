import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contract-edit-buttons', 'Integration | Component | contract edit buttons', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{contract-edit-buttons}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#contract-edit-buttons}}
      template block text
    {{/contract-edit-buttons}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
