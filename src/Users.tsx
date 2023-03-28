export function Users() {
  return (
    <div className="mt-10 flex flex-col items-center">
      <h1 className=" text-gray-800 text-3xl font-bold">Lista de Usuários</h1>
      <table className="mt-4">
        <thead>
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0001</td>
            <td>kris2005</td>
            <td>Kris</td>
            <td>Moraes de Almeida</td>
            <td>kris@icloud.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
