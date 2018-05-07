import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('validated-form-group', 'Integration | Component | validated form group', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{validated-form-group}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#validated-form-group}}
      template block text
    {{/validated-form-group}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
