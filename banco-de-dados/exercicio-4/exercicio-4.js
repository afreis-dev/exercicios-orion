db = db.getSiblingDB("orion_db");

db.posts.updateOne(
  { titulo: "Schema flexível" },
  {
    $set: {
      comentarios: [
        { autor: "Maria Silva", texto: "Ótima explicação!" },
        { autor: "João Santos", texto: "Agora entendi o schema flexível." }
      ]
    }
  }
);

printjson(db.posts.find({ tags: "nosql" }).toArray());

printjson(db.posts.find({ autor: "Ana Souza" }).toArray());

printjson(db.posts.find({ "comentarios.autor": "Maria Silva" }).toArray());
