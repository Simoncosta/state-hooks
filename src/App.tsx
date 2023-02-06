import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Destroy from "./Destroy";

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React Hook'
  ])

  const [boolDestroy, setBoolDestroy] = useState(false);

  const [input, setInput] = useState('');

  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input]);
    setInput('');
  }, [tarefas, input])

  // componentWillMount did mount
  useEffect(() => {
    const tarefasStorage = localStorage.getItem('tarefas');

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }

    // unmount - usado muito pouco
    return () => { };

  }, []);

  // did update
  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const totalTarefas = useMemo(() => tarefas.length, [tarefas]);

  return (
    <div>
      <ul>
        {
          tarefas.map((tarefa: any, index: number) => (
            <li key={index}>{tarefa}</li>
          ))
        }
      </ul>
      <br />
      <strong>Você tem: {totalTarefas} tarefas</strong>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type='button' onClick={handleAdd}>Adicionar</button>
      {
        boolDestroy ? <Destroy /> : ""
      }
      <button onClick={() => setBoolDestroy(!boolDestroy)}>Component Destroy</button>
    </div>
  )
}

export default App
