import { supabase } from "./supabase.js"

const list = document.getElementById("list")

// 读取商品
async function load() {
  const { data } = await supabase.from("products").select()
  
  list.innerHTML = data.map(p => `
    <p>
      ${p.name} | 库存：${p.stock}
    </p>
  `).join("")
}

// 添加商品
window.addProduct = async function () {
  const name = document.getElementById("name").value
  const stock = document.getElementById("stock").value

  await supabase.from("products").insert({
    name: name,
    stock: parseInt(stock)
  })

  load()
}

load()