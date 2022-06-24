import {Todo} from '../types/todo'
// 保存数据
export function saveTodos(todos:Todo[]){
  localStorage.setItem('todos_key',JSON.stringify(todos))
}
// 读取数据
export function readTodos(){
  return JSON.parse(localStorage.getItem('todos_key')||'[]')
}
