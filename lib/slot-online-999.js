'use babel';

import SlotOnline999View from './slot-online-999-view';
import { CompositeDisposable } from 'atom';

export default {

  slotOnline999View: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.slotOnline999View = new SlotOnline999View(state.slotOnline999ViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.slotOnline999View.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'slot-online-999:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.slotOnline999View.destroy();
  },

  serialize() {
    return {
      slotOnline999ViewState: this.slotOnline999View.serialize()
    };
  },

  toggle() {
    console.log('SlotOnline999 was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
