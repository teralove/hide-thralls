const Command = require('command');

module.exports = function HideThralls(hide_thralls) {
    
    const Thrall_IDs = [
        10235016, //Protection
        10235017, //Protection 2
        10236013, //Life
        10236014, //Life 2
        10237014, //Vengeance
        10237015, //Vengeance 2
        10238007, //Wrath
        10238008, //Wrath 2
        10239003  //Lord
    ];
    const HuntingZone_ID = 1023;
    let enabled = true;
    
    hide_thralls.hook('S_SPAWN_NPC', 9, (event) => {
        if (!enabled) return;
        if (Thrall_IDs.includes(event.templateId) && event.huntingZoneId == HuntingZone_ID) {
            return false;
        }
    })
    
    const command = Command(hide_thralls);
    command.add('hidethralls', ()=> {
        enabled = !enabled;
        command.message('hide-thralls ' + (enabled ? 'enabled' : 'disabled'));
    });
}
