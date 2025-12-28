const QuizQuestions = [
  {
    question: "¿En qué año se consumó la Independencia de México?",
    options: ["1810", "1821", "1910", "1917"],
    answer: "1821",
  },
  {
    question: "¿Quién es conocido como el 'Padre de la Patria' en México?",
    options: ["Benito Juárez", "Miguel Hidalgo", "José María Morelos", "Emiliano Zapata"],
    answer: "Miguel Hidalgo",
  },
  {
    question: "¿Cuál es la montaña más alta de México?",
    options: ["Popocatépetl", "Iztaccíhuatl", "Pico de Orizaba", "Nevado de Toluca"],
    answer: "Pico de Orizaba",
  },
  {
    question: "¿En qué estado se encuentra Chichén Itzá?",
    options: ["Quintana Roo", "Yucatán", "Campeche", "Chiapas"],
    answer: "Yucatán",
  },
  {
    question: "¿Cuántos estados tiene México?",
    options: ["30", "31", "32", "33"],
    answer: "32",
  },

  {
    question: "¿Qué pintor mexicano es famoso por sus murales?",
    options: ["Frida Kahlo", "Diego Rivera", "Rufino Tamayo", "José Clemente Orozco"],
    answer: "Diego Rivera",
  },
  {
    question: "¿En qué año comenzó la Revolución Mexicana?",
    options: ["1910", "1913", "1917", "1920"],
    answer: "1910",
  },
  {
    question: "¿Cuál es la moneda oficial de México?",
    options: ["Dólar", "Euro", "Peso", "Real"],
    answer: "Peso",
  },
  {
    question: "¿Qué civilización construyó Teotihuacán?",
    options: ["Aztecas", "Mayas", "Teotihuacanos", "Olmecas"],
    answer: "Teotihuacanos",
  },
  {
    question: "¿Cuál es el platillo mexicano patrimonio de la humanidad?",
    options: ["Tacos", "Comida tradicional mexicana", "Mole", "Pozole"],
    answer: "Comida tradicional mexicana",
  },

  {
    question: "¿Quién fue presidente de México durante 5 periodos?",
    options: ["Porfirio Díaz", "Benito Juárez", "Santa Anna", "Lázaro Cárdenas"],
    answer: "Porfirio Díaz",
  },
  {
    question: "¿Qué significa la palabra 'México' en náhuatl?",
    options: ["Tierra de dioses", "En el ombligo de la luna", "Valle sagrado", "Tierra del águila"],
    answer: "En el ombligo de la luna",
  },
  {
    question: "¿Cuándo se celebra el Día de Muertos?",
    options: ["1 de noviembre", "2 de noviembre", "31 de octubre", "1 y 2 de noviembre"],
    answer: "1 y 2 de noviembre",
  },
  {
    question: "¿Qué emperador azteca recibió a Hernán Cortés?",
    options: ["Cuauhtémoc", "Moctezuma II", "Cuitláhuac", "Ahuízotl"],
    answer: "Moctezuma II",
  },
  {
    question: "¿En qué ciudad se firmaron los Tratados de Córdoba?",
    options: ["Veracruz", "Córdoba", "Puebla", "Ciudad de México"],
    answer: "Córdoba",
  },

  {
    question: "¿Qué mariachi es considerado el más famoso de México?",
    options: ["Mariachi Sol de México", "Mariachi Vargas de Tecalitlán", "Mariachi Los Camperos", "Mariachi Cobre"],
    answer: "Mariachi Vargas de Tecalitlán",
  },
  {
    question: "¿En qué año fue nacionalizada la industria petrolera?",
    options: ["1917", "1938", "1940", "1950"],
    answer: "1938",
  },
  {
    question: "¿Cuál es el volcán activo más joven de México?",
    options: ["Popocatépetl", "Paricutín", "Colima", "Ceboruco"],
    answer: "Paricutín",
  },
  {
    question: "¿Qué poeta mexicano ganó el Premio Nobel de Literatura?",
    options: ["Octavio Paz", "Carlos Fuentes", "Juan Rulfo", "Amado Nervo"],
    answer: "Octavio Paz",
  },
  {
    question: "¿Cuál es el nombre del himno nacional mexicano completo?",
    options: ["Himno Nacional Mexicano", "Mexicanos, al grito de guerra", "Canto a la Patria", "Himno de México"],
    answer: "Mexicanos, al grito de guerra",
  },

  {
    question: "¿Qué ciudad fue la capital del Imperio Azteca?",
    options: ["Tenochtitlán", "Texcoco", "Tlatelolco", "Cholula"],
    answer: "Tenochtitlán",
  },
  {
    question: "¿Cuál es el deporte tradicional mexicano prehispánico?",
    options: ["Lucha libre", "Juego de pelota", "Charrería", "Ulama"],
    answer: "Juego de pelota",
  },
  {
    question: "¿Qué presidente promulgó las Leyes de Reforma?",
    options: ["Porfirio Díaz", "Benito Juárez", "Sebastián Lerdo de Tejada", "Ignacio Comonfort"],
    answer: "Benito Juárez",
  },
  {
    question: "¿En qué estado se encuentra la Zona Arqueológica de Palenque?",
    options: ["Yucatán", "Quintana Roo", "Chiapas", "Tabasco"],
    answer: "Chiapas",
  },
  {
    question: "¿Cuál es el nombre del héroe niño de Chapultepec más conocido?",
    options: ["Juan Escutia", "Francisco Márquez", "Fernando Montes de Oca", "Vicente Suárez"],
    answer: "Juan Escutia",
  },
];

let count = 0;
let score = 0;
let answered = false;

const start = document.querySelector(".start");
const options = document.querySelector(".option-container");
const question = document.querySelector(".question");
const next = document.querySelector(".next");
const check = document.querySelector(".check");

const op_list = [...options.children];

// Función para cargar una pregunta
function loadQuestion() {
  question.textContent = QuizQuestions[count]["question"];
  op_list[0].textContent = QuizQuestions[count]["options"][0];
  op_list[1].textContent = QuizQuestions[count]["options"][1];
  op_list[2].textContent = QuizQuestions[count]["options"][2];
  op_list[3].textContent = QuizQuestions[count]["options"][3];
  document.querySelector(".q").textContent = count + 1;
  
  // Resetear estados
  op_list.forEach((element) => {
    element.classList.remove("checked", "correct", "incorrect");
    element.style.pointerEvents = "auto";
  });
  
  answered = false;
  check.style.opacity = "1";
  check.style.pointerEvents = "auto";
}

// Función para mostrar resultados finales
function showResults() {
  const percentage = ((score / QuizQuestions.length) * 100).toFixed(1);
  question.textContent = `¡Quiz Completado! 🎉`;
  options.innerHTML = `
    <div style="text-align: center">
      <h2>Tu Puntuación</h2>
      <p style="font-size: 3rem; margin: 20px 0;">${score}/${QuizQuestions.length}</p>
      <p style="font-size: 1.5rem; color: ${percentage >= 70 ? 'green' : percentage >= 50 ? 'orange' : 'red'};">
        ${percentage}%
      </p>
      <p style="margin-top: 20px;">
        ${percentage >= 90 ? '¡Excelente! 🌟' : 
          percentage >= 70 ? '¡Muy bien! 👏' : 
          percentage >= 50 ? 'Bien, pero puedes mejorar 👍' : 
          'Sigue practicando 💪'}
      </p>
    </div>
  `;
  check.style.display = "none";
  next.style.display = "none";
}

start.addEventListener("click", () => {
  document.querySelector(".home").style.display = "none";
  document.querySelector(".game-start").style.display = "flex";
  loadQuestion();
});

options.addEventListener("click", (e) => {
  if (e.target == e.currentTarget || answered) return;
  op_list.forEach((item) => item.classList.remove("checked"));
  e.target.classList.add("checked");
});

next.addEventListener("click", () => {
  if (!answered) {
    alert("Por favor verifica tu respuesta primero!");
    return;
  }
  
  count++;
  if (count >= QuizQuestions.length) {
    showResults();
    return;
  }
  
  loadQuestion();
});

check.addEventListener("click", () => {
  if (answered) return;
  
  const checkedOption = document.querySelector(".checked");
  
  if (!checkedOption) {
    alert("Por favor selecciona una opción !!!");
    return;
  }
  
  answered = true;
  
  // Deshabilitar opciones
  op_list.forEach((element) => {
    element.style.pointerEvents = "none";
  });
  
  // Verificar respuesta
  if (checkedOption.textContent === QuizQuestions[count]["answer"]) {
    checkedOption.classList.add("correct");
    score++;
  } else {
    checkedOption.classList.add("incorrect");
    // Mostrar la respuesta correcta
    op_list.forEach((item) => {
      if (item.textContent === QuizQuestions[count]["answer"]) {
        item.classList.add("correct");
      }
    });
  }
  
  // Deshabilitar botón CHECK
  check.style.opacity = "0.5";
  check.style.pointerEvents = "none";
});

