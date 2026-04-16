import { useState, useEffect } from 'react';

function ListaTarefas() {
  const [tarefas, setTarefas] = useState(() => {
    const tarefasSalvas = localStorage.getItem('minhasTarefasSalvas');
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  
  const [novaTarefa, setNovaTarefa] = useState('');

  useEffect(() => {
    localStorage.setItem('minhasTarefasSalvas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      const objTarefa = {
        desc: novaTarefa,
        concluida: false,
        data: new Date()
      };
      setTarefas([...tarefas, objTarefa]);
      setNovaTarefa("");
    }
  };

  const tarefaCompleta = (indice) => {
    const novasTarefas = [...tarefas];
    novasTarefas[indice].completa = !novasTarefas[indice].completa;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (indice) => {
    setTarefas(tarefas.filter((_, i) => i !== indice));
  };

  const ordemAlfabetica = () => {
    const organizadas = [...tarefas].sort((a, b) => a.desc.localeCompare(b.desc));
    setTarefas(organizadas);
  };

  const ordemData = () => {
    const organizadas = [...tarefas].sort((a, b) => new Date(a.data) - new Date(b.data));
    setTarefas(organizadas);
  };

  return (
    <div className="container">
      <h2>Lista de Tarefas</h2>
      
      <div className="input-g">
        <input
          type='text'
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder='Digite uma nova tarefa'/>
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <div className="organizacao">
        <button onClick={ordemAlfabetica}>A-Z</button>
        <button onClick={ordemData}>Data</button>
      </div>

      <ul>
        {tarefas.map((tarefa, indice) => (
            <li key={indice} className={tarefa.completa ? 'completa' : ''}>
                <span onClick={() => tarefaCompleta(indice)}>
                    {tarefa.desc}
                </span>
                <button className="remover" onClick={() => removerTarefa(indice)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTarefas;