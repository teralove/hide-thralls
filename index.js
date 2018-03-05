module.exports = function HideThralls(dispatch) {
    
    Thrall_IDs = [
        10235016, //Protection
        10236013, //Life
        10237014, //Vengeance
        10238007  //Wrath
    ];
    HuntingZone_ID = 1023;
    
    dispatch.hook('S_SPAWN_NPC', 5, (event) => {
        if (Thrall_IDs.includes(event.templateId) && event.huntingZoneId == HuntingZone_ID) {
            return false;
        }
    })
    
}
