import { useFetch } from "../hooks/useFetch";
import { useEffect } from 'react'


export const FetchApp = () => {

  const url = "https://jsonplaceholder.typicode.com/users/";
  const { data, isLoading, error, fetchData } = useFetch();

  useEffect(() => {
    fetchData(url, 'GET')
  }, [])
  

  return (
    <>
      <h2>Lista de usuarios</h2>
      {isLoading ? (
        <h4>Cargando....</h4>
      ) : error ? (
        <h4>Ha ocurrido un error: {error}</h4>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">WebSite</th>
            </tr>
          </thead>
          <tbody>
            {
                data.map(user => {
                   return (
                    <tr key={user.id}>
                      <th scope="row">{user.id}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.website}</td>
                    </tr>
                   )
                })
            }
            
          </tbody>
        </table>
      )}
    </>
  );
};
