module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send(`
        <html>
            <body>
                Ultima School
            </body>
        </html>
        `);
  });

  app.get("/alunos", (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Listagem de Alunos</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Matricula</th>
                        <th>Nome do Aluno</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>01854229</td>
                        <td>Daniel Machado</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>2</td>
                        <td>01854333</td>
                        <td>João Amoedo</td>
                    </tr>
                </tbody>
            </table>
        </body>
    </html>    
    `);
  });
};
