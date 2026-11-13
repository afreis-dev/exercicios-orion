db = db.getSiblingDB("orion_db");

db.createCollection("posts");

db.posts.insertOne({
  titulo: "Introdução ao MongoDB",
  autor: "Ana Souza",
  conteudo: "O MongoDB guarda os dados em documentos JSON."
});

db.posts.insertOne({
  titulo: "Schema flexível",
  autor: "Carlos Lima",
  conteudo: "Documentos da mesma coleção podem ter campos diferentes.",
  tags: ["nosql", "flexivel"]
});

printjson(db.posts.find().toArray());
