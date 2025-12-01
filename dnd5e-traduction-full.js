const MODULE_ID = 'dnd5e-traduction-full'; // Change this ID!

// No need to change the code below this line, but it’s your module so do it if you want!

Hooks.on('init', () => {
  game.settings.register(MODULE_ID, 'autoRegisterBabel', {
    name: 'Automatically activate translation via Babele',
    hint: 'Automatically implements Babele translations without needing to point to the directory containing the translations.',
    scope: 'world',
    config: true,
    default: true,
    type: Boolean,
    onChange: value => {
      if (value) {
        autoRegisterBabel();
      }

      window.location.reload();
    },
  });

  if (game.settings.get(MODULE_ID, 'autoRegisterBabel')) {
    autoRegisterBabel();
  }
});

function autoRegisterBabel() {
  if (typeof Babele !== 'undefined') {
    const babele = Babele.get();

    babele.register({
      module: MODULE_ID,
      lang: 'fr',
      dir: 'compendium/fr/dungeon-master-guide'
    });

    babele.register({
      module: MODULE_ID,
      lang: 'fr',
      dir: 'compendium/fr/monster-manual'
    });

    babele.register({
      module: MODULE_ID,
      lang: 'fr',
      dir: 'compendium/fr/players-handbook'
    });

    babele.register({
      module: MODULE_ID,
      lang: 'fr',
      dir: 'compendium/fr/d&d-modern-content'
    });
  }
}
