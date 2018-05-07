import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('doctrack-navbar', 'Integration | Component | doctrack navbar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{doctrack-navbar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#doctrack-navbar}}
      template block text
    {{/doctrack-navbar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
