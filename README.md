# rivian-configurator
Poor man's configurator for Rivian R1S and R1T

Base configurator image url:

    https://rivian.com/compimg/


Option codes:

                BUILD	
                vv00000371	Launch Edition
                vv00000370	Adventure Package
                vv00000367	Explore Package
                PAINT
                vv00000291	LA Silver
                vv00000290	Glacier White
                vv00000295	Red Canyon
                vv00000289	Midnight
                vv00000294	Rivian Blue
                vv00000296	Limestone
                vv00000293	Forest Green
                vv00000292	El Cap Granite
                vv00000297	Compass Yellow
                WHEELS
                vv00000546	20" All-Terrain
                vv00000548	20" All-Terrain Dark
                vv00000544	21" Road
                vv00000545	22" Sport
                vv00000550	22" Sport Dark
                INTERIOR
                vv00000238	Black Mountain
                vv00000240	Ocean Coast
                vv00000239	Forest Edge
                
Check out the functioning website here: https://kaedenbrinkman.github.io/rivian-configurator/

Update:
Rivian released v2.1 of the configurator, which has new option codes:
```
const option_codes = {
        "Launch Edition": "PKG-LCH",
        "Adventure Package": "PKG-ADV",
        "Explore Package": "PKG-EXP",
        "LA Silver": "EXP-LSV",
        "Glacier White": "EXP-GWT",
        "Red Canyon": "EXP-CRD",
        Midnight: "EXP-MDN",
        "Rivian Blue": "EXP-RBL",
        Limestone: "EXP-LST",
        "Forest Green": "EXP-FGR",
        "El Cap Granite": "EXP-ELG",
        "Compass Yellow": "EXP-CYL",
        '20" All-Terrain': "WHL-0A1",
        '20" All-Terrain Dark': "WHL-0AD",
        '21" Road': "WHL-1RD",
        '22" Sport Bright': "WHL-2SS",
        '22" Sport Dark': "WHL-2SD",
        "Black Mountain": "INT-BMP",
        "Ocean Coast": "INT-GYP",
        "Forest Edge": "INT-GRP",
        R1S: "r1s",
        R1T: "r1t",
      };
```
