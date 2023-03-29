// db.roles.insert({"_id" : ObjectId("62d0b550539c987a827ddf4f"),"nombre" : "Maestro base","clave" : "MST_ROLE","descripcion" : "Maestro de base","activated" : true,"dateCreated" : NumberLong(1657845036740),"lastEdited" : NumberLong(1657845036740)})
// db.roles.insert({"_id" : ObjectId("62d0b579539c987a827ddf53"),"nombre" : "Maestro ingles","clave" : "MSTI_ROLE","descripcion" : "Maestro de  ingles","activated" : true,"dateCreated" : NumberLong(1657845087394),"lastEdited" : NumberLong(1657845087394)})
// db.roles.insert({"_id" : ObjectId("62d0b5af539c987a827ddf58"),"nombre" : "Maestro de educación física","clave" : "MSTF_ROLE","descripcion" : "Maestro de educación física","activated" : true,"dateCreated" : NumberLong(1657845127687),"lastEdited" : NumberLong(1657858253449)})
// db.roles.insert({"_id" : ObjectId("62d0b5eb539c987a827ddf5c"),"nombre" : "Maestro computación","clave" : "MSTC_ROLE","descripcion" : "Maestro de computación","activated" : true,"dateCreated" : NumberLong(1657845196522),"lastEdited" : NumberLong(1657862167967)})
// db.roles.insert({"_id" : ObjectId("62d0f80ce988a92dd40fb6f0"),"nombre" : "Maestro danza","clave" : "MSTS_ROLE","descripcion" : "Maestro de danza","activated" : true,"dateCreated" : NumberLong(1657862127573),"lastEdited" : NumberLong(1657862171455)})
// db.roles.insert({"_id" : ObjectId("62e362635dc4f9ffaadcc20c"),"nombre" : "Maestro de musica","clave" : "MSTM_ROLE","descripcion" : "Maestro de musica","activated" : true,"dateCreated" : NumberLong(1659069015408),"lastEdited" : NumberLong(1659070464848)})
db.roles.insert({"_id" : ObjectId("62e45b5a5d15504d7664ed0d"),"nombre" : "Directivo","clave" : "DIR_ROLE","descripcion" : "Directivo","activated" : true,"dateCreated" : NumberLong(1659132742892),"lastEdited" : NumberLong(1659132780704)})



db.tiposanguineos.insert({"_id" : ObjectId("62d0e0cce988a92dd40fb4e6"),"nombre" : "A+","clave" : "APOS","descripcion" : " A positivo","activated" : true,"dateCreated" : NumberLong(1657856134236),"lastEdited" : NumberLong(1657856513378),"__v" : 0})

/* 2 */
db.tiposanguineos.insert({"_id" : ObjectId("62d0e0efe988a92dd40fb4eb"),"nombre" : "O+","clave" : "APOS","descripcion" : "O positivo","activated" : true,"dateCreated" : NumberLong(1657856224681),"lastEdited" : NumberLong(1657856529112),"__v" : 0})
/* 3 */
db.tiposanguineos.insert({"_id" : ObjectId("62d0e10be988a92dd40fb4ef"),"nombre" : "B+","clave" : "BPOS","descripcion" : "B positivo","activated" : true,"dateCreated" : NumberLong(1657856249004),"lastEdited" : NumberLong(1657856541968),"__v" : 0})
/* 4 */
db.tiposanguineos.insert({"_id" : ObjectId("62d0e122e988a92dd40fb4f2"),"nombre" : "AB+","clave" : "ABPOS","descripcion" : "AB positivo","activated" : true,"dateCreated" : NumberLong(1657856271832),"lastEdited" : NumberLong(1657856552738),"__v" : 0})
/* 5 */
db.tiposanguineos.insert({"_id" : ObjectId("62d0e135e988a92dd40fb4f5"),"nombre" : "A-","clave" : "ANEG","descripcion" : "A negativo","activated" : true,"dateCreated" : NumberLong(1657856291130),"lastEdited" : NumberLong(1657856568286),"__v" : 0})
/* 6 */
db.tiposanguineos.insert({"_id" : ObjectId("62d0e149e988a92dd40fb4f8"),"nombre" : "O-","clave" : "ONEG","descripcion" : "O negativo","activated" : true,"dateCreated" : NumberLong(1657856311183),"lastEdited" : NumberLong(1657856581878),"__v" : 0})
/* 7 */
db.tiposanguineos.insert({"_id" : ObjectId("62d0e15ee988a92dd40fb4fb"),"nombre" : "B-","clave" : "BNEG","descripcion" : "B negativo","activated" : true,"dateCreated" : NumberLong(1657856337186),"lastEdited" : NumberLong(1657856594772),"__v" : 0})
/* 8 */
db.tiposanguineos.insert({ "_id": ObjectId("62d0e171e988a92dd40fb4fe"), "nombre": "AB-", "clave": "ABNEG", "descripcion": "AB negativo", "activated": true, "dateCreated": NumberLong(1657856354537), "lastEdited": NumberLong(1659198096276), "__v": 0 })







/* 1 */
db.documentos.insert({"_id" : ObjectId("62d0e302e988a92dd40fb53f"),"nombre" : "Acta alumno","clave" : "ACTAL","descripcion" : "Acta alumno","activated" : true,"dateCreated" : NumberLong(1657856715265),"lastEdited" : NumberLong(1657857923448),"__v" : 0})
/* 2 */
db.documentos.insert({"_id" : ObjectId("62d0e331e988a92dd40fb546"),"nombre" : "CURP Alumno","clave" : "CRPAL","descripcion" : "CURP Alumno","activated" : true,"dateCreated" : NumberLong(1657856780137),"lastEdited" : NumberLong(1657856829096),"__v" : 0})
/* 3 */
db.documentos.insert({"_id" : ObjectId("62d0e372e988a92dd40fb54d"),"nombre" : "Boleta 1ro","clave" : "BLTPR","descripcion" : "Boleta de primer año","activated" : true,"dateCreated" : NumberLong(1657856834142),"lastEdited" : NumberLong(1657856900038),"__v" : 0})
/* 4 */
db.documentos.insert({"_id" : ObjectId("62d0e3b9e988a92dd40fb558"),"nombre" : "Boleta 2do","clave" : "BLTSG","descripcion" : "Boleta segundo año","activated" : true,"dateCreated" : NumberLong(1657856904361),"lastEdited" : NumberLong(1657856960493),"__v" : 0})
/* 5 */
db.documentos.insert({"_id" : ObjectId("62d0e3dee988a92dd40fb55f"),"nombre" : "Boleta 3ro","clave" : "BLTTR","descripcion" : "Boleta de tercer año","activated" : true,"dateCreated" : NumberLong(1657856965992),"lastEdited" : NumberLong(1657857000902),"__v" : 0})
/* 6 */
db.documentos.insert({"_id" : ObjectId("62d0e408e988a92dd40fb568"),"nombre" : "Boleta 4to","clave" : "BLTCT","descripcion" : "Boleta de cuarto año","activated" : true,"dateCreated" : NumberLong(1657857003629),"lastEdited" : NumberLong(1657857048014),"__v" : 0})
/* 7 */
    db.documentos.insert({"_id" : ObjectId("62d0e430e988a92dd40fb56f"),"nombre" : "Boleta 5to","clave" : "BLTQT","descripcion" : "Boleta de quinto año","activated" : true,"dateCreated" : NumberLong(1657857052735),"lastEdited" : NumberLong(1657857157330),"__v" : 0})
/* 8 */
db.documentos.insert({"_id" : ObjectId("62d0e482e988a92dd40fb575"),"nombre" : "Certificado preescolar","clave" : "CRTPR","descripcion" : "Certificado de preescolar","activated" : true,"dateCreated" : NumberLong(1657857109830),"lastEdited" : NumberLong(1657857161302),"__v" : 0})
/* 9 */
db.documentos.insert({"_id" : ObjectId("62d0e4b8e988a92dd40fb57f"),"nombre" : "Certificado Medico","clave" : "CRTMD","descripcion" : "Certificado medico","activated" : true,"dateCreated" : NumberLong(1657857182497),"lastEdited" : NumberLong(1657857222466),"__v" : 0})
/* 10 */
db.documentos.insert({"_id" : ObjectId("62d0e4fee988a92dd40fb587"),"nombre" : "Acta tutor","clave" : "ACTTT","descripcion" : "Acta de tutor","activated" : true,"dateCreated" : NumberLong(1657857257876),"lastEdited" : NumberLong(1657857372644),"__v" : 0})
/* 11 */
db.documentos.insert({"_id" : ObjectId("62d0e54ee988a92dd40fb58c"),"nombre" : "CURP Tutor","clave" : "CRPTT","descripcion" : "CURP Tutor","activated" : true,"dateCreated" : NumberLong(1657857300036),"lastEdited" : NumberLong(1657857452612),"__v" : 0})
/* 12 */
db.documentos.insert({"_id" : ObjectId("62d0e57ee988a92dd40fb593"),"nombre" : "INE Tutor","clave" : "INETT","descripcion" : "INE Tutor","activated" : true,"dateCreated" : NumberLong(1657857386497),"lastEdited" : NumberLong(1657857459245),"__v" : 0})
/* 13 */
db.documentos.insert({"_id" : ObjectId("62d0e5a7e988a92dd40fb597"),"nombre" : "Comprobante domicilio","clave" : "CPBDM","descripcion" : "Comprobante de domicilio","activated" : true,"dateCreated" : NumberLong(1657857414964),"lastEdited" : NumberLong(1657857462369),"__v" : 0})
/* 14 */
db.documentos.insert({"_id" : ObjectId("62d5b136887599224aaa6ef9"),"nombre" : "Acta nacimiento","clave" : "ACTMT","descripcion" : "Acta de nacimiento maestro","activated" : true,"dateCreated" : NumberLong(1658171626058),"lastEdited" : NumberLong(1658171820148),"__v" : 0})
/* 15 */
db.documentos.insert({ "_id": ObjectId("62d5b155887599224aaa6efd"), "nombre": "Titulo", "clave": "TITMT", "descripcion": "Titulo maestro", "activated": true, "dateCreated": NumberLong(1658171709996), "lastEdited": NumberLong(1658171831549), "__v": 0 })




/* 1 */
db.grados.insert({"_id" : ObjectId("62d0e5dde988a92dd40fb5a4"),"nombre" : "Primer grado","clave" : "PRM01","descripcion" : "Primer grado","activated" : true,"dateCreated" : NumberLong(1657857473762),"lastEdited" : NumberLong(1657857640243),"__v" : 0})
/* 2 */
db.grados.insert({"_id" : ObjectId("62d0e605e988a92dd40fb5a9"),"nombre" : "Segundo grado","clave" : "SGD02","descripcion" : "Segundo grado","activated" : true,"dateCreated" : NumberLong(1657857514688),"lastEdited" : NumberLong(1657857675478),"__v" : 0})
/* 3 */
db.grados.insert({"_id" : ObjectId("62d0e62ce988a92dd40fb5ac"),"nombre" : "Tercer grado","clave" : "TCR03","descripcion" : "Tercer grado","activated" : true,"dateCreated" : NumberLong(1657857543783),"lastEdited" : NumberLong(1657857678573),"__v" : 0})
/* 4 */
db.grados.insert({"_id" : ObjectId("62d0e647e988a92dd40fb5af"),"nombre" : "Cuarto grado","clave" : "CRT04","descripcion" : "Cuarto grado","activated" : true,"dateCreated" : NumberLong(1657857585625),"lastEdited" : NumberLong(1657857681210),"__v" : 0})
/* 5 */
db.grados.insert({"_id" : ObjectId("62d0e665e988a92dd40fb5b2"),"nombre" : "Quinto grado","clave" : "QNT05","descripcion" : "Quinto grado","activated" : true,"dateCreated" : NumberLong(1657857611440),"lastEdited" : NumberLong(1657857683946),"__v" : 0})
/* 6 */
db.grados.insert({ "_id": ObjectId("62d0e686e988a92dd40fb5b8"), "nombre": "Sexto grado", "clave": "SXT06", "descripcion": "Sexto grado", "activated": true, "dateCreated": NumberLong(1657857643425), "lastEdited": NumberLong(1657857685978), "__v": 0 })



/* 1 */
db.ciclos.insert({ "_id": ObjectId("62d0e7d1e988a92dd40fb5db"), "nombre": "2022-2023", "clave": "2223", "descripcion": "Año del  Quincentenario de Toluca de Lerdo, Capital del Estado de México", "activated": true, "dateCreated": NumberLong(1657857958225), "lastEdited": NumberLong(1657858168547), "__v": 0 })




db.grupos.insert({ "_id": ObjectId("62d0e8a2e988a92dd40fb5ef"), "nombre": "A", "clave": "GPOA", "descripcion": "Grupo A", "activated": true, "dateCreated": NumberLong(1657858177507), "lastEdited": NumberLong(1657863043341), "__v": 0 })



/* 1 */
db.materias.insert({ "_id": ObjectId("62d3a5699104aebd08bb0e72"), "nombre": "Base", "clave": "MATBAS", "descripcion": "Maestro Base", "activated": true, "dateCreated": NumberLong(1658037586561), "lastEdited": NumberLong(1658037677785), "__v": 0 })
/* 2 */
db.materias.insert({ "_id": ObjectId("62d3a5dd9104aebd08bb0e7e"), "nombre": "Educación Física", "clave": "EDUFIS", "descripcion": "Maestro de educación física", "activated": true, "dateCreated": NumberLong(1658037679935), "lastEdited": NumberLong(1658037853001), "__v": 0 })
/* 3 */
db.materias.insert({ "_id": ObjectId("62d3a5fb9104aebd08bb0e81"), "nombre": "Ingles", "clave": "MATING", "descripcion": "Maestro de ingles", "activated": true, "dateCreated": NumberLong(1658037728932), "lastEdited": NumberLong(1658037856095), "__v": 0 })
/* 4 */
db.materias.insert({ "_id": ObjectId("62d3a6149104aebd08bb0e84"), "nombre": "Computación", "clave": "MATCOM", "descripcion": "Maestro de computación", "activated": true, "dateCreated": NumberLong(1658037759110), "lastEdited": NumberLong(1658037859444), "__v": 0 })
/* 5 */
db.materias.insert({ "_id": ObjectId("62d3a62e9104aebd08bb0e87"), "nombre": "Danza", "clave": "MATDAN", "descripcion": "Maestro de danza", "activated": true, "dateCreated": NumberLong(1658037783032), "lastEdited": NumberLong(1658037862824), "__v": 0 })
/* 6 */
db.materias.insert({ "_id": ObjectId("62d3a64d9104aebd08bb0e8a"), "nombre": "Música", "clave": "MUTMUS", "descripcion": "Maestro de música", "activated": true, "dateCreated": NumberLong(1658037812041), "lastEdited": NumberLong(1658037865786), "__v": 0 })

db.parentescos.insert(



    /* 1 */
db.parentescos.insert({
"_id": ObjectId("62d0ed6fe988a92dd40fb602"),
"nombre": "Madre",
"clave": "MDRE",
"descripcion": "Madre",
"activated": true,
"dateCreated": NumberLong(1657859423412),
"lastEdited": NumberLong(1657859774049),
"__v": 0
})
/* 2 */
db.parentescos.insert({
"_id": ObjectId("62d0ed91e988a92dd40fb605"),
"nombre": "Padre",
"clave": "PDRE",
"descripcion": "Padre",
"activated": true,
"dateCreated": NumberLong(1657859442205),
"lastEdited": NumberLong(1657859777510),
"__v": 0
})

/* 3 */
db.parentescos.insert({
"_id": ObjectId("62d0edd8e988a92dd40fb609"),
"nombre": "Abuelo paterno",
"clave": "ABOP",
"descripcion": "Abuelo paterno",
"activated": true,
"dateCreated": NumberLong(1657859483711),
"lastEdited": NumberLong(1657859780664),
"__v": 0
})

/* 4 */
db.parentescos.insert({
"_id": ObjectId("62d0ee76e988a92dd40fb623"),
"nombre": "Abuela paterna",
"clave": "ABAP",
"descripcion": "Abuela paterna",
"activated": true,
"dateCreated": NumberLong(1657859607905),
"lastEdited": NumberLong(1657859784255),
"__v": 0
})

/* 5 */
db.parentescos.insert({
"_id": ObjectId("62d0ee9ee988a92dd40fb627"),
"nombre": "Abuelo materno",
"clave": "ABOM",
"descripcion": "Abuelo materno",
"activated": true,
"dateCreated": NumberLong(1657859718681),
"lastEdited": NumberLong(1657859787425),
"__v": 0
})

/* 6 */
db.parentescos.insert({
"_id": ObjectId("62d0eeb7e988a92dd40fb62a"),
"nombre": "Abuela materna",
"clave": "ABAM",
"descripcion": "Abuela materna",
"activated": true,
"dateCreated": NumberLong(1657859745745),
"lastEdited": NumberLong(1657859790662),
"__v": 0
})

/* 7 */
db.parentescos.insert({
"_id": ObjectId("62d0ef0ce988a92dd40fb63f"),
"nombre": "Padrastro",
"clave": "PDST",
"descripcion": "Padrastro",
"activated": true,
"dateCreated": NumberLong(1657859802984),
"lastEdited": NumberLong(1657859937484),
"__v": 0
})

/* 8 */
db.parentescos.insert({
"_id": ObjectId("62d0ef2ee988a92dd40fb644"),
"nombre": "Madrastra",
"clave": "MDST",
"descripcion": "Madrastra",
"activated": true,
"dateCreated": NumberLong(1657859862527),
"lastEdited": NumberLong(1657860072538),
"__v": 0
})

/* 9 */
db.parentescos.insert({
"_id": ObjectId("62d0ef5ae988a92dd40fb647"),
"nombre": "Tío(a) Materno",
"clave": "TIMT",
"descripcion": "Tío(a) Materno",
"activated": true,
"dateCreated": NumberLong(1657859892769),
"lastEdited": NumberLong(1657860173834),
"__v": 0
})

/* 10 */
db.parentescos.insert({
"_id": ObjectId("62d0efe4e988a92dd40fb651"),
"nombre": "Tío(a) Paterno",
"clave": "TIPT",
"descripcion": "Tío(a) Paterno",
"activated": true,
"dateCreated": NumberLong(1657859934687),
"lastEdited": NumberLong(1657860177339),
"__v": 0
})

/* 11 */
db.parentescos.insert({
"_id": ObjectId("62d0f032e988a92dd40fb657"),
"nombre": "Hermano(a)",
"clave": "HRMO",
"descripcion": "Hermano(a)",
"activated": true,
"dateCreated": NumberLong(1657860123267),
"lastEdited": NumberLong(1657860180516),
"__v": 0
})








/* 1 */
db.cursos.insert({
"_id": ObjectId("62e4b59fd39306775ef9aae4"),
"nombre": "1ero 2022-2023",
"clave": "2223M01OA",
"ciclo": ObjectId("62d0e7d1e988a92dd40fb5db"),
"grado": ObjectId("62d0e5dde988a92dd40fb5a4"),
"grupo": ObjectId("62d0e8a2e988a92dd40fb5ef"),
"alumnos": [],
"maestros": [],
"activated": true,
"dateCreated": NumberLong(1659135405138),
"lastEdited": NumberLong(1659195333501),
"usuarioCreated": ObjectId("62d0f13de988a92dd40fb668"),
"__v": 0
})

/* 2 */
db.cursos.insert({
"_id": ObjectId("62e4b5b5d39306775ef9aaf4"),
"nombre": "2do 2022-2023",
"clave": "2223D02OA",
"ciclo": ObjectId("62d0e7d1e988a92dd40fb5db"),
"grado": ObjectId("62d0e605e988a92dd40fb5a9"),
"grupo": ObjectId("62d0e8a2e988a92dd40fb5ef"),
"alumnos": [],
"maestros": [],
"activated": true,
"dateCreated": NumberLong(1659135405138),
"lastEdited": NumberLong(1659157537796),
"usuarioCreated": ObjectId("62d0f13de988a92dd40fb668"),
"__v": 0
})

/* 3 */
db.cursos.insert({
"_id": ObjectId("62e4b5c9d39306775ef9aafe"),
"nombre": "3ro 2022-2023",
"clave": "2223R03OA",
"ciclo": ObjectId("62d0e7d1e988a92dd40fb5db"),
"grado": ObjectId("62d0e62ce988a92dd40fb5ac"),
"grupo": ObjectId("62d0e8a2e988a92dd40fb5ef"),
"alumnos": [],
"maestros": [],
"activated": true,
"dateCreated": NumberLong(1659135405138),
"lastEdited": NumberLong(1659157537834),
"usuarioCreated": ObjectId("62d0f13de988a92dd40fb668"),
"__v": 0
})

/* 4 */
db.cursos.insert({
"_id": ObjectId("62e4b5ded39306775ef9ab08"),
"nombre": "4to 2022-2023",
"clave": "2223T04OA",
"ciclo": ObjectId("62d0e7d1e988a92dd40fb5db"),
"grado": ObjectId("62d0e647e988a92dd40fb5af"),
"grupo": ObjectId("62d0e8a2e988a92dd40fb5ef"),
"alumnos": [],
"maestros": [],
"activated": true,
"dateCreated": NumberLong(1659135405138),
"lastEdited": NumberLong(1659157537911),
"usuarioCreated": ObjectId("62d0f13de988a92dd40fb668"),
"__v": 0
})

/* 5 */
db.cursos.insert({
"_id": ObjectId("62e4b5eed39306775ef9ab12"),
"nombre": "5to 2022-2023",
"clave": "2223T05OA",
"ciclo": ObjectId("62d0e7d1e988a92dd40fb5db"),
"grado": ObjectId("62d0e665e988a92dd40fb5b2"),
"grupo": ObjectId("62d0e8a2e988a92dd40fb5ef"),
"alumnos": [],
"maestros": [],
"activated": true,
"dateCreated": NumberLong(1659135405138),
"lastEdited": NumberLong(1659157537907),
"usuarioCreated": ObjectId("62d0f13de988a92dd40fb668"),
"__v": 0
})

/* 6 */
db.cursos.insert({
"_id": ObjectId("62e4b602d39306775ef9ab1c"),
"nombre": "6to 2022-2023",
"clave": "2223T06OA",
"ciclo": ObjectId("62d0e7d1e988a92dd40fb5db"),
"grado": ObjectId("62d0e686e988a92dd40fb5b8"),
"grupo": ObjectId("62d0e8a2e988a92dd40fb5ef"),
"alumnos": [],
"maestros": [],
"activated": true,
"dateCreated": NumberLong(1659135405138),
"lastEdited": NumberLong(1659197800098),
"usuarioCreated": ObjectId("62d0f13de988a92dd40fb668"),
"__v": 0
})