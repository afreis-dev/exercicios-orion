DROP TABLE IF EXISTS alunos;
DROP TABLE IF EXISTS cursos;

CREATE TABLE cursos (
    id SERIAL PRIMARY KEY,
    nome_curso TEXT NOT NULL
);

CREATE TABLE alunos (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    curso_id INTEGER,
    FOREIGN KEY (curso_id) REFERENCES cursos (id)
);

INSERT INTO cursos (nome_curso) VALUES
    ('Desenvolvimento Web'),
    ('Ciência de Dados'),
    ('Design de Produto');

INSERT INTO alunos (nome, email, curso_id) VALUES
    ('João Silva', 'joao.silva@email.com', 1),
    ('Maria Souza', 'maria.souza@email.com', 1),
    ('Carlos Lima', 'carlos.lima@email.com', 2),
    ('Ana Paula', 'ana.paula@email.com', 2);

SELECT * FROM alunos;

INSERT INTO alunos (nome, email, curso_id) VALUES
    ('Aluno Inválido', 'invalido@email.com', 99);
