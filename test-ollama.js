import { Ollama } from 'ollama';

const ollama = new Ollama();

async function test() {
  try {
    const res = await ollama.chat({
      model: 'llama3',
      messages: [{ role: 'user', content: 'ما هو الذكاء الاصطناعي؟' }],
    });
    console.log('✅ الرد من الذكاء الاصطناعي:\n', res.message.content);
  } catch (err) {
    console.error('❌ خطأ في الاتصال بـ Ollama:', err);
  }
}

test();
