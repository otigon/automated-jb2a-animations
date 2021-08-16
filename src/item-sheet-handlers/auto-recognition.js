export default class AUTORECOG {
    constructor () {
        this._chakram = ["chakram", game.i18n.format("AUTOANIM.chakram").toLowerCase()];

        this._rapier = ["rapier", game.i18n.format("AUTOANIM.itemRapier").toLowerCase()];

        this._lasersword = ["lasersword", game.i18n.format("AUTOANIM.itemLaserSword").toLowerCase()];

        this._greatsword = ["greatsword", "bastard sword", game.i18n.localize("AUTOANIM.itemGreatsword").toLowerCase()];

        this._sword = ["sword", "falchion", game.i18n.format("AUTOANIM.itemSword"), "scimitar", game.i18n.format("AUTOANIM.itemScimitar")].map((name) => name.toLowerCase());

        this._greatclub = ["greatclub", game.i18n.format("AUTOANIM.itemGreatclub").toLowerCase()];

        this._greataxe = ["greataxe", "battleaxe", "battle axe", game.i18n.format("AUTOANIM.itemGreataxe").toLowerCase(), game.i18n.format("AUTOANIM.itemBattleaxe").toLowerCase()];

        this._mace = ["mace", game.i18n.format("AUTOANIM.itemMace").toLowerCase()];

        this._maul = ["maul", game.i18n.format("AUTOANIM.itemMaul").toLowerCase()];

        this._dagger = ["dagger", game.i18n.format("AUTOANIM.itemDagger").toLowerCase()];

        this._handaxe = ["handaxe", "hatchet", game.i18n.format("AUTOANIM.itemHandaxe").toLowerCase()];

        this._spear = ["spear", game.i18n.format("AUTOANIM.itemSpear").toLowerCase()];

        this._arrow = ["longbow", game.i18n.format("AUTOANIM.itemArrow").toLowerCase(), "arrow", game.i18n.format("AUTOANIM.itemLongbow").toLowerCase(), game.i18n.format("AUTOANIM.itemShortbow").toLowerCase()];

        this._rangehammer = ["light hammer", "throwing hammer", game.i18n.format("AUTOANIM.itemThrowingHammer").toLowerCase()]

        this._siege = ["siege boulder", game.i18n.format("AUTOANIM.itemSiegeBoulder").toLowerCase()]

        this._boulder = ["boulder", game.i18n.format("AUTOANIM.itemBoulder").toLowerCase()]

        this._lasershot = ["laser blast", game.i18n.format("AUTOANIM.itemLaserBlast").toLowerCase(), "laser gun", "laser pistol", "lasershot"]

        this._rangejavelin = ["javelin", "dart", game.i18n.format("AUTOANIM.itemJavelin").toLowerCase()];

        this._rangesling = ["sling", game.i18n.format("AUTOANIM.itemSling").toLowerCase()]

        this._thunderwave = ["thunderwave", game.i18n.format("AUTOANIM.itemThunderwave").toLowerCase()]

        this._shatter = ["shatter", game.i18n.format("AUTOANIM.itemShatter").toLowerCase()]

        this._magicmissile = ["magic missile", game.i18n.format("AUTOANIM.itemMagicMissile").toLowerCase()]

        this._curewounds = ["cure wounds", game.i18n.format("AUTOANIM.itemCureWounds").toLowerCase()]

        this._generichealing = ["healing word", "generic healing", game.i18n.format("AUTOANIM.itemHealingWord").toLowerCase(), game.i18n.format("AUTOANIM.itemGenericHealing").toLowerCase()]

        this._firebolt = ["fire bolt", "produce flame", game.i18n.format("AUTOANIM.itemFireBolt").toLowerCase(), ]

        this._rayoffrost = ["ray of frost", game.i18n.format("AUTOANIM.itemRayFrost").toLowerCase()]

        this._witchbolt = ["witch bolt", game.i18n.format("AUTOANIM.itemWitchBolt").toLowerCase()]

        this._eldritchblast = ["eldritch blast", game.i18n.format("AUTOANIM.itemEldritchBlast").toLowerCase()]

        this._scorchingray = ["scorching ray", "fire ray", game.i18n.format("AUTOANIM.itemScorchingRay").toLowerCase()]

        this._disintegrate = ["disintegrate", game.i18n.format("AUTOANIM.itemDisintegrate").toLowerCase()]

        this._guidingbolt = ["guiding bolt", game.i18n.format("AUTOANIM.itemGuidingBolt").toLowerCase()]

        this._shield = ["shield", game.i18n.format("AUTOANIM.itemShield").toLowerCase()]

        this._creaturebite = ["bite", "jaw", game.i18n.format("AUTOANIM.itemBite").toLowerCase()];

        this._creatureclaw = ["claw", game.i18n.format("AUTOANIM.itemClaw").toLowerCase()];

        this._huntersmark = ["hunter's mark", game.i18n.format("AUTOANIM.itemHM").toLowerCase(), "huntersmark"]

        this._unarmedstrike = ["unarmed strike", "fist", "gauntlet", game.i18n.format("AUTOANIM.itemUnarmedStrike").toLowerCase()]

        this._flurryofblows = ["flurry of blows", game.i18n.format("AUTOANIM.itemFlurryBlows").toLowerCase()]

        this._calllightning = ["call lightning", game.i18n.format("AUTOANIM.animCallLightning").toLowerCase()]

        this._darkness = ["darkness", game.i18n.format("AUTOANIM.animDarkness").toLowerCase()]

        this._fogcloud = ["fog cloud", game.i18n.format("AUTOANIM.animFogCloud").toLowerCase()]

        this._sleetstorm = ["sleetstorm", game.i18n.format("AUTOANIM.animSleetstorm").toLowerCase()]

        this._spiritguardians = ["spirit guardians", game.i18n.format("AUTOANIM.animSpiritGuardians").toLowerCase()]

        this._wallofforce = ["wall of force", game.i18n.format("AUTOANIM.animWallOfForce").toLowerCase()]

        this._whirlwind = ["whirlwind", game.i18n.format("AUTOANIM.animWhirlwind").toLowerCase()]

        this._mistystep = ["misty step", game.i18n.format("AUTOANIM.itemMistyStep").toLowerCase()]

        this._bolt = ["bolt", game.i18n.format("AUTOANIM.bolt").toLowerCase(), "crossbow", game.i18n.format("AUTOANIM.crossbow").toLowerCase()]

        this._bullet = ["bullet", game.i18n.format("AUTOANIM.bullet").toLowerCase()]

        this._snipe = ["snipe", game.i18n.format("AUTOANIM.snipe").toLowerCase()]

        this._sneakattack = ["sneakattack", "sneak attack", game.i18n.format("AUTOANIM.sneakattack").toLowerCase()]
    }

    get chakram()           {return this._chakram;}
    get rapier()            {return this._rapier;}
    get lasersword()        {return this._lasersword;}
    get greatsword()        {return this._greatsword;}
    get sword()             {return this._sword;}
    get greatclub()         {return this._greatclub;}
    get greataxe()          {return this._greataxe;}
    get mace()              {return this._mace;}
    get maul()              {return this._maul;}
    get dagger()            {return this._dagger;}
    get handaxe()           {return this._handaxe;}
    get spear()             {return this._spear;}
    get arrow()             {return this._arrow;}
    get rangehammer()       {return this._rangehammer;}
    get siege()             {return this._siege;}
    get boulder()           {return this._boulder;}
    get lasershot()         {return this._lasershot;}
    get rangejavelin()      {return this._rangejavelin;}
    get rangesling()        {return this._rangesling;}
    get thunderwave()       {return this._thunderwave;}
    get shatter()           {return this._shatter;}
    get magicmissile()      {return this._magicmissile;}
    get curewounds()        {return this._curewounds;}
    get generichealing()    {return this._generichealing;}
    get firebolt()          {return this._firebolt;}
    get rayoffrost()        {return this._rayoffrost;}
    get witchbolt()         {return this._witchbolt;}
    get eldritchblast()     {return this._eldritchblast;}
    get scorchingray()      {return this._scorchingray;}
    get disintegrate()      {return this._disintegrate;}
    get guidingbolt()       {return this._guidingbolt;}
    get shield()            {return this._shield;}
    get creaturebite()      {return this._creaturebite;}
    get creatureclaw()      {return this._creatureclaw;}
    get huntersmark()       {return this._huntersmark;}
    get unarmedstrike()     {return this._unarmedstrike;}
    get flurryofblows()     {return this._flurryofblows;}
    get calllightning()     {return this._calllightning;}
    get darkness()          {return this._darkness;}
    get fogcloud()          {return this._fogcloud;}
    get sleetstorm()        {return this._sleetstorm;}
    get spiritguardians()   {return this._spiritguardians;}
    get wallofforce()       {return this._wallofforce;}
    get whirlwind()         {return this._whirlwind;}
    get mistystep()         {return this._mistystep;}
    get bolt()              {return this._bolt;}
    get bullet()            {return this._bullet;}
    get snipe()             {return this._snipe;}
    get sneakattack()       {return this._sneakattack;}
}
