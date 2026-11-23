// Pasos de la guía de cada página. Generado a partir de la misma definición que usa el lienzo de Claude Design.
// sel: selector CSS del elemento que se resalta (sin sel, la tarjeta aparece centrada).
// La landing, el inicio de sesión y la política de privacidad no tienen guía.
const GUIAS = {
  "mis-trayectorias": [
    {
      "sel": null,
      "titulo": "Te damos la bienvenida a Mis trayectorias",
      "texto": "Aquí gestionas las trayectorias formativas que creaste. En pocos pasos te mostramos qué hace cada sección."
    },
    {
      "sel": "[data-guia=\"menu\"]",
      "titulo": "Menú principal",
      "texto": "Desde aquí vas a tus trayectorias, al chat con el equipo del CEEDi, a la analítica de uso y a los recursos institucionales."
    },
    {
      "sel": ".nt",
      "titulo": "Crea una trayectoria",
      "texto": "Pasa el cursor por el botón y elige: crear la trayectoria con el asistente de diseño curricular o empezar por el formulario de contextualización."
    },
    {
      "sel": "[data-guia=\"filtros\"]",
      "titulo": "Busca y filtra",
      "texto": "Escribe el nombre de una trayectoria o de un programa, o filtra por estado: pendientes, en progreso o completadas."
    },
    {
      "sel": "[data-guia=\"tabla\"]",
      "titulo": "Tus trayectorias",
      "texto": "Cada fila muestra el programa, el avance, el estado y las fechas de creación y de última edición."
    },
    {
      "sel": "[data-guia=\"acciones\"]",
      "titulo": "Acciones de cada trayectoria",
      "texto": "Ver la vista previa, revisar la analítica, editar en el Centro de diseño, consultar el historial de versiones, descargar o borrar."
    },
    {
      "sel": ".usuario",
      "titulo": "Tu cuenta",
      "texto": "Abre este menú para ir a la configuración de tu perfil o cerrar sesión."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "trayectorias-ceedi": [
    {
      "sel": null,
      "titulo": "Te damos la bienvenida, Laura",
      "texto": "Como colaboradora del CEEDi ves todas las trayectorias del cuerpo docente, y también puedes crear, editar y borrar trayectorias. Te mostramos cómo."
    },
    {
      "sel": "[data-guia=\"menu\"]",
      "titulo": "Menú principal",
      "texto": "Desde aquí vas a las trayectorias, al chat con docentes, a la analítica de uso y a los recursos institucionales."
    },
    {
      "sel": ".nt",
      "titulo": "Crea una trayectoria",
      "texto": "Pasa el cursor por el botón y elige: crear la trayectoria con el asistente de diseño curricular o empezar por el formulario de contextualización."
    },
    {
      "sel": "[data-guia=\"resumen\"]",
      "titulo": "Resumen general",
      "texto": "Cuántas trayectorias hay en total y cuántas están en progreso, pendientes o completadas."
    },
    {
      "sel": "[data-guia=\"filtros\"]",
      "titulo": "Busca y filtra",
      "texto": "Busca por trayectoria, programa o docente, elige un programa académico o filtra por estado."
    },
    {
      "sel": "[data-guia=\"tabla\"]",
      "titulo": "Trayectorias del cuerpo docente",
      "texto": "Cada fila muestra quién la creó, el estado, el avance y la fecha de la última edición."
    },
    {
      "sel": "[data-guia=\"acciones\"]",
      "titulo": "Acciones de cada trayectoria",
      "texto": "Ver la vista previa, revisar la analítica, editar en el Centro de diseño, consultar el historial, descargar, comentar con su docente en el chat o borrar."
    },
    {
      "sel": ".usuario",
      "titulo": "Tu cuenta",
      "texto": "Abre este menú para ir a la configuración de tu perfil o cerrar sesión."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "contextualizacion": [
    {
      "sel": null,
      "titulo": "Contextualización de la trayectoria",
      "texto": "Cuéntanos sobre tu curso una sola vez: los 6 asistentes usarán esta información. Son 5 partes cortas."
    },
    {
      "sel": "[data-guia=\"partes\"]",
      "titulo": "Las 5 partes",
      "texto": "Ve en qué parte estás y salta a cualquiera con un clic. La barra muestra tu avance."
    },
    {
      "sel": "[data-guia=\"borrador\"]",
      "titulo": "Guardado automático",
      "texto": "Guardamos tu borrador mientras escribes, así que puedes salir y volver después."
    },
    {
      "sel": "[data-guia=\"formulario\"]",
      "titulo": "El formulario",
      "texto": "Completa los campos de la parte en la que estás. Los marcados con * son obligatorios."
    },
    {
      "sel": "[data-guia=\"pie\"]",
      "titulo": "Avanza a tu ritmo",
      "texto": "Continúa a la parte siguiente o vuelve a la anterior. Las partes 2, 3 y 4 se pueden omitir y completar después."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "centro-diseno": [
    {
      "sel": null,
      "titulo": "Centro de diseño microcurricular",
      "texto": "Desde aquí trabajas tu trayectoria con los asistentes de IA, en el orden que necesites."
    },
    {
      "sel": "nav[aria-label=\"Ruta de navegación\"]",
      "titulo": "Ruta de navegación",
      "texto": "Te muestra dónde estás y te permite volver a Mis trayectorias."
    },
    {
      "sel": "[data-guia=\"asistentes\"]",
      "titulo": "Los asistentes",
      "texto": "Cada tarjeta explica qué hace el asistente y cuánto has avanzado con él. Ábrela para continuar o iniciar."
    },
    {
      "sel": "[data-guia=\"recomendacion\"]",
      "titulo": "Recomendación",
      "texto": "Te sugerimos con qué asistente seguir según tu avance."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "asistente-1": [
    {
      "sel": null,
      "titulo": "Asistente 1 · Diseño curricular UAO",
      "texto": "Te ayuda a definir competencias, niveles de desempeño, resultados de aprendizaje y criterios de evaluación. Te mostramos cómo trabajar con él."
    },
    {
      "sel": "nav[aria-label=\"Ruta de navegación\"]",
      "titulo": "Ruta de navegación",
      "texto": "Te muestra dónde estás. Haz clic en un nivel anterior para volver."
    },
    {
      "sel": "[data-guia=\"encabezado\"]",
      "titulo": "Encabezado del asistente",
      "texto": "Muestra el asistente y la trayectoria en la que trabajas. En el botón de tres puntos encuentras más opciones."
    },
    {
      "sel": "[role=\"log\"]",
      "titulo": "Conversación",
      "texto": "Aquí ves tus mensajes y las propuestas del asistente, en orden."
    },
    {
      "sel": "[data-guia=\"propuesta\"]",
      "titulo": "Tú decides sobre cada propuesta",
      "texto": "Acepta e integra la propuesta, edítala, pide otra versión o recházala. La IA propone; tú decides."
    },
    {
      "sel": "[data-guia=\"mensaje\"]",
      "titulo": "Escribe tu mensaje",
      "texto": "Pide lo que necesitas con tus palabras. Con el clip adjuntas documentos de apoyo."
    },
    {
      "sel": "aside[aria-label=\"Progreso del diseño\"]",
      "titulo": "Progreso del diseño",
      "texto": "Las etapas del asistente: las completadas, la que está en curso y las que siguen."
    },
    {
      "sel": "[data-guia=\"siguiente\"]",
      "titulo": "Siguiente paso sugerido",
      "texto": "Cuando termines las etapas, te indicamos con qué continuar."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "asistente-2": [
    {
      "sel": null,
      "titulo": "Asistente 2 · Diseño microcurricular UAO",
      "texto": "Construye la matriz de alineación de actividades con metas, medios de evaluación y semanas. Te mostramos cómo trabajar con él."
    },
    {
      "sel": "nav[aria-label=\"Ruta de navegación\"]",
      "titulo": "Ruta de navegación",
      "texto": "Te muestra dónde estás. Haz clic en un nivel anterior para volver."
    },
    {
      "sel": "[data-guia=\"encabezado\"]",
      "titulo": "Encabezado del asistente",
      "texto": "Muestra el asistente y la trayectoria en la que trabajas. En el botón de tres puntos encuentras más opciones."
    },
    {
      "sel": "[role=\"log\"]",
      "titulo": "Conversación",
      "texto": "Aquí ves tus mensajes y las propuestas del asistente, en orden."
    },
    {
      "sel": "[data-guia=\"propuesta\"]",
      "titulo": "Tú decides sobre cada propuesta",
      "texto": "Acepta e integra la propuesta, edítala, pide otra versión o recházala. La IA propone; tú decides."
    },
    {
      "sel": "[data-guia=\"mensaje\"]",
      "titulo": "Escribe tu mensaje",
      "texto": "Pide lo que necesitas con tus palabras. Con el clip adjuntas documentos de apoyo."
    },
    {
      "sel": "aside[aria-label=\"Progreso del diseño\"]",
      "titulo": "Progreso del diseño",
      "texto": "Las etapas del asistente: las completadas, la que está en curso y las que siguen."
    },
    {
      "sel": "[data-guia=\"siguiente\"]",
      "titulo": "Siguiente paso sugerido",
      "texto": "Cuando termines las etapas, te indicamos con qué continuar."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "asistente-3": [
    {
      "sel": null,
      "titulo": "Asistente 3 · Diseña UAO",
      "texto": "Profundiza cada actividad de aprendizaje con el modelo Canvas. Te mostramos cómo trabajar con él."
    },
    {
      "sel": "nav[aria-label=\"Ruta de navegación\"]",
      "titulo": "Ruta de navegación",
      "texto": "Te muestra dónde estás. Haz clic en un nivel anterior para volver."
    },
    {
      "sel": "[data-guia=\"encabezado\"]",
      "titulo": "Encabezado del asistente",
      "texto": "Muestra el asistente y la trayectoria en la que trabajas. En el botón de tres puntos encuentras más opciones."
    },
    {
      "sel": "[role=\"log\"]",
      "titulo": "Conversación",
      "texto": "Aquí ves tus mensajes y las propuestas del asistente, en orden."
    },
    {
      "sel": "[data-guia=\"propuesta\"]",
      "titulo": "Tú decides sobre cada propuesta",
      "texto": "Acepta e integra la propuesta, edítala, pide otra versión o recházala. La IA propone; tú decides."
    },
    {
      "sel": "[data-guia=\"mensaje\"]",
      "titulo": "Escribe tu mensaje",
      "texto": "Pide lo que necesitas con tus palabras. Con el clip adjuntas documentos de apoyo."
    },
    {
      "sel": "aside[aria-label=\"Progreso del diseño\"]",
      "titulo": "Progreso del diseño",
      "texto": "Las etapas del asistente: las completadas, la que está en curso y las que siguen."
    },
    {
      "sel": "[data-guia=\"siguiente\"]",
      "titulo": "Siguiente paso sugerido",
      "texto": "Cuando termines las etapas, te indicamos con qué continuar."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "asistente-4": [
    {
      "sel": null,
      "titulo": "Asistente 4 · Instrumentos de evaluación UAO",
      "texto": "Diseña rúbricas analíticas, con escala de 0 a 5, y cuestionarios. Te mostramos cómo trabajar con él."
    },
    {
      "sel": "nav[aria-label=\"Ruta de navegación\"]",
      "titulo": "Ruta de navegación",
      "texto": "Te muestra dónde estás. Haz clic en un nivel anterior para volver."
    },
    {
      "sel": "[data-guia=\"encabezado\"]",
      "titulo": "Encabezado del asistente",
      "texto": "Muestra el asistente y la trayectoria en la que trabajas. En el botón de tres puntos encuentras más opciones."
    },
    {
      "sel": "[role=\"log\"]",
      "titulo": "Conversación",
      "texto": "Aquí ves tus mensajes y las propuestas del asistente, en orden."
    },
    {
      "sel": "[data-guia=\"propuesta\"]",
      "titulo": "Tú decides sobre cada propuesta",
      "texto": "Acepta e integra la propuesta, edítala, pide otra versión o recházala. La IA propone; tú decides."
    },
    {
      "sel": "[data-guia=\"mensaje\"]",
      "titulo": "Escribe tu mensaje",
      "texto": "Pide lo que necesitas con tus palabras. Con el clip adjuntas documentos de apoyo."
    },
    {
      "sel": "aside[aria-label=\"Progreso del diseño\"]",
      "titulo": "Progreso del diseño",
      "texto": "Las etapas del asistente: las completadas, la que está en curso y las que siguen."
    },
    {
      "sel": "[data-guia=\"siguiente\"]",
      "titulo": "Siguiente paso sugerido",
      "texto": "Cuando termines las etapas, te indicamos con qué continuar."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "asistente-5": [
    {
      "sel": null,
      "titulo": "Asistente 5 · AUREA",
      "texto": "Selecciona o genera portadas, banners e infografías con la identidad UAO. Te mostramos cómo trabajar con él."
    },
    {
      "sel": "nav[aria-label=\"Ruta de navegación\"]",
      "titulo": "Ruta de navegación",
      "texto": "Te muestra dónde estás. Haz clic en un nivel anterior para volver."
    },
    {
      "sel": "[data-guia=\"encabezado\"]",
      "titulo": "Encabezado del asistente",
      "texto": "Muestra el asistente y la trayectoria en la que trabajas. En el botón de tres puntos encuentras más opciones."
    },
    {
      "sel": "[role=\"log\"]",
      "titulo": "Conversación",
      "texto": "Aquí ves tus mensajes y las propuestas del asistente, en orden."
    },
    {
      "sel": "[data-guia=\"propuesta\"]",
      "titulo": "Tú decides sobre cada propuesta",
      "texto": "Acepta e integra la propuesta, edítala, pide otra versión o recházala. La IA propone; tú decides."
    },
    {
      "sel": "[data-guia=\"mensaje\"]",
      "titulo": "Escribe tu mensaje",
      "texto": "Pide lo que necesitas con tus palabras. Con el clip adjuntas documentos de apoyo."
    },
    {
      "sel": "aside[aria-label=\"Progreso del diseño\"]",
      "titulo": "Progreso del diseño",
      "texto": "Las etapas del asistente: las completadas, la que está en curso y las que siguen."
    },
    {
      "sel": "[data-guia=\"siguiente\"]",
      "titulo": "Siguiente paso sugerido",
      "texto": "Cuando termines las etapas, te indicamos con qué continuar."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "asistente-6": [
    {
      "sel": null,
      "titulo": "Asistente 6 · Guiones técnicos audiovisuales",
      "texto": "Convierte guiones literarios en guiones técnicos por escenas y planos. Te mostramos cómo trabajar con él."
    },
    {
      "sel": "nav[aria-label=\"Ruta de navegación\"]",
      "titulo": "Ruta de navegación",
      "texto": "Te muestra dónde estás. Haz clic en un nivel anterior para volver."
    },
    {
      "sel": "[data-guia=\"encabezado\"]",
      "titulo": "Encabezado del asistente",
      "texto": "Muestra el asistente y la trayectoria en la que trabajas. En el botón de tres puntos encuentras más opciones."
    },
    {
      "sel": "[role=\"log\"]",
      "titulo": "Conversación",
      "texto": "Aquí ves tus mensajes y las propuestas del asistente, en orden."
    },
    {
      "sel": "[data-guia=\"propuesta\"]",
      "titulo": "Tú decides sobre cada propuesta",
      "texto": "Acepta e integra la propuesta, edítala, pide otra versión o recházala. La IA propone; tú decides."
    },
    {
      "sel": "[data-guia=\"mensaje\"]",
      "titulo": "Escribe tu mensaje",
      "texto": "Pide lo que necesitas con tus palabras. Con el clip adjuntas documentos de apoyo."
    },
    {
      "sel": "aside[aria-label=\"Progreso del diseño\"]",
      "titulo": "Progreso del diseño",
      "texto": "Las etapas del asistente: las completadas, la que está en curso y las que siguen."
    },
    {
      "sel": "[data-guia=\"siguiente\"]",
      "titulo": "Siguiente paso sugerido",
      "texto": "Cuando termines las etapas, te indicamos con qué continuar."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "historial": [
    {
      "sel": null,
      "titulo": "Historial de versiones",
      "texto": "Cada vez que guardas cambios en tu trayectoria creamos una versión. Aquí las consultas y las restauras."
    },
    {
      "sel": "nav[aria-label=\"Ruta de navegación\"]",
      "titulo": "Ruta de navegación",
      "texto": "Te muestra dónde estás y te permite volver a pasos anteriores."
    },
    {
      "sel": "[data-guia=\"versiones\"]",
      "titulo": "Lista de versiones",
      "texto": "Cada versión muestra quién la hizo, cuándo y qué cambió. Ábrela para ver el detalle o restaurarla."
    },
    {
      "sel": "[data-guia=\"panel\"]",
      "titulo": "Detalle y estado",
      "texto": "Consulta la versión elegida y lo que cambió frente a la anterior."
    },
    {
      "sel": "[data-guia=\"como\"]",
      "titulo": "Así funciona el historial",
      "texto": "Un resumen de cómo se guardan y se restauran las versiones. Restaurar no borra las demás."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "exportacion": [
    {
      "sel": null,
      "titulo": "Consolidación y exportación",
      "texto": "Reúne en un solo paquete lo que construiste y descárgalo en el formato que necesites, en 3 pasos."
    },
    {
      "sel": "[data-guia=\"componentes\"]",
      "titulo": "1. Elige los componentes",
      "texto": "Marca qué partes quieres incluir: diseño, analítica, historial de versiones y más."
    },
    {
      "sel": "[data-guia=\"formato\"]",
      "titulo": "2. Elige el formato",
      "texto": "PDF, Word, Excel o CSV, según el uso que le darás al documento."
    },
    {
      "sel": "[data-guia=\"descarga\"]",
      "titulo": "3. Descarga",
      "texto": "Revisa el resumen de tu paquete y descárgalo."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "vista-previa": [
    {
      "sel": null,
      "titulo": "Vista previa del diseño",
      "texto": "Así se ve el diseño microcurricular completo de tu trayectoria, con lo que construiste en cada asistente."
    },
    {
      "sel": "[data-guia=\"ficha\"]",
      "titulo": "Ficha de la trayectoria",
      "texto": "Los datos generales del curso: programa, créditos, semestre y modalidad."
    },
    {
      "sel": "[data-guia=\"indice\"]",
      "titulo": "Índice",
      "texto": "Salta directo a cualquier sección del diseño."
    },
    {
      "sel": "[data-guia=\"seccion\"]",
      "titulo": "Secciones del diseño",
      "texto": "Cada sección muestra un resultado: competencias, matriz de alineación, actividades, instrumentos de evaluación, recursos visuales y guion técnico."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "analitica-trayectoria": [
    {
      "sel": null,
      "titulo": "Analítica de la trayectoria",
      "texto": "Los datos de una trayectoria formativa y de su docente: avance, uso de la IA y acompañamiento."
    },
    {
      "sel": "[data-guia=\"ficha\"]",
      "titulo": "Ficha del docente y del proceso",
      "texto": "Quién diseña la trayectoria, en qué programa y en qué estado está el proceso."
    },
    {
      "sel": "[data-guia=\"indicadores\"]",
      "titulo": "Indicadores clave",
      "texto": "Las cifras más importantes de la trayectoria, de un vistazo."
    },
    {
      "sel": "[data-guia=\"etapas\"]",
      "titulo": "Avance por etapas",
      "texto": "Cuánto se ha avanzado con cada asistente y en qué estado está el proceso."
    },
    {
      "sel": "[data-guia=\"ia\"]",
      "titulo": "Uso de la IA",
      "texto": "Cuántas propuestas se aceptaron, se editaron o se rechazaron, y con qué asistentes se trabajó más."
    },
    {
      "sel": "[data-guia=\"actividad\"]",
      "titulo": "Actividad y acompañamiento",
      "texto": "Lo último que pasó en la trayectoria y el acompañamiento del CEEDi."
    },
    {
      "sel": "[data-guia=\"privacidad\"]",
      "titulo": "Tus datos están protegidos",
      "texto": "Lee la política de privacidad cuando quieras; se abre en una pestaña nueva."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "analitica": [
    {
      "sel": null,
      "titulo": "Analítica general",
      "texto": "Los datos generales del uso de la IA en AI Class Builder, por periodo y por programa."
    },
    {
      "sel": "[data-guia=\"filtros\"]",
      "titulo": "Filtros y exportación",
      "texto": "Elige el periodo y el programa, y exporta el informe en PDF, XLSX o CSV."
    },
    {
      "sel": "[data-guia=\"indicadores\"]",
      "titulo": "Indicadores clave",
      "texto": "Las cifras principales del periodo, de un vistazo."
    },
    {
      "sel": "[data-guia=\"estado\"]",
      "titulo": "Estado, asistentes y evolución",
      "texto": "Cómo van las trayectorias, qué asistentes se usan más y cómo cambia el uso en el tiempo."
    },
    {
      "sel": "[data-guia=\"calidad\"]",
      "titulo": "Calidad de la interacción",
      "texto": "Cuántas propuestas de la IA se aceptan, se editan o se rechazan."
    },
    {
      "sel": "[data-guia=\"programas\"]",
      "titulo": "Uso por programa",
      "texto": "Compara el uso de la plataforma entre programas académicos."
    },
    {
      "sel": "[data-guia=\"acompanamiento\"]",
      "titulo": "Acompañamiento",
      "texto": "Las alertas y el acompañamiento del CEEDi a las trayectorias."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "chat": [
    {
      "sel": null,
      "titulo": "Comentarios y revisión",
      "texto": "En este espacio conversas con el equipo del CEEDi y con otras personas docentes para cocrear tus trayectorias."
    },
    {
      "sel": "[data-guia=\"conversaciones\"]",
      "titulo": "Conversaciones",
      "texto": "Busca una conversación o filtra las que no has leído. Pasa el cursor sobre una para marcarla como leída o eliminarla."
    },
    {
      "sel": "[data-guia=\"conversacion\"]",
      "titulo": "La conversación",
      "texto": "Lee los mensajes y descarga los archivos adjuntos."
    },
    {
      "sel": ".redactar",
      "titulo": "Escribe tu mensaje",
      "texto": "Adjunta archivos con el clip y envía tu mensaje con el botón Enviar."
    },
    {
      "sel": "[data-guia=\"contactos\"]",
      "titulo": "Contactos",
      "texto": "Abre la ficha de un contacto para ver sus datos, escribirle o enviarle un correo. También puedes crear contactos y ocultar este panel."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "recursos": [
    {
      "sel": null,
      "titulo": "Recursos",
      "texto": "Materiales y servicios institucionales para diseñar tus trayectorias."
    },
    {
      "sel": "[data-guia=\"ceedi\"]",
      "titulo": "Recursos del CEEDi",
      "texto": "Plantillas, guías y acompañamiento del Centro de Excelencia en Docencia."
    },
    {
      "sel": "[data-guia=\"crai\"]",
      "titulo": "Servicios del CRAI",
      "texto": "Catálogo, reservas, recursos digitales y tutoriales de la biblioteca. Los enlaces se abren en el sitio del CRAI."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "plantillas": [
    {
      "sel": null,
      "titulo": "Plantillas institucionales",
      "texto": "Documentos base de la UAO para diseñar y presentar tus trayectorias."
    },
    {
      "sel": "[data-guia=\"busqueda\"]",
      "titulo": "Busca y ordena",
      "texto": "Encuentra una plantilla por nombre y ordena la lista como prefieras."
    },
    {
      "sel": "[data-guia=\"tabla\"]",
      "titulo": "Lista de plantillas",
      "texto": "Revisa el tipo, el formato y la fecha de cada plantilla, y descárgala."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "perfil": [
    {
      "sel": null,
      "titulo": "Este es tu perfil",
      "texto": "Aquí actualizas tus datos y ves un resumen de tu trabajo en la plataforma."
    },
    {
      "sel": "[data-guia=\"datos\"]",
      "titulo": "Tus datos",
      "texto": "Edita tu nombre, teléfono, extensión, unidad académica, especialidad y biografía. El correo lo gestiona tu cuenta institucional."
    },
    {
      "sel": "[data-guia=\"avance\"]",
      "titulo": "Tu avance",
      "texto": "Cuántas trayectorias tienes y en qué estado está cada una."
    },
    {
      "sel": "[data-guia=\"seguir\"]",
      "titulo": "Continúa donde quedaste",
      "texto": "Retoma la última trayectoria en la que trabajaste."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ],
  "perfil-ceedi": [
    {
      "sel": null,
      "titulo": "Este es tu perfil",
      "texto": "Aquí actualizas tus datos y ves un resumen de tu acompañamiento a las trayectorias."
    },
    {
      "sel": "[data-guia=\"datos\"]",
      "titulo": "Tus datos",
      "texto": "Edita tu nombre, teléfono, extensión, dependencia, área de acompañamiento y biografía. El correo lo gestiona tu cuenta institucional."
    },
    {
      "sel": "[data-guia=\"acompanamiento\"]",
      "titulo": "Tu acompañamiento",
      "texto": "Las trayectorias que tienes asignadas, en qué estado está su revisión y tu actividad en el chat."
    },
    {
      "sel": "[data-guia=\"pendiente\"]",
      "titulo": "Revisión pendiente",
      "texto": "La próxima trayectoria que espera tus comentarios."
    },
    {
      "sel": ".nav-ayuda",
      "titulo": "¿Necesitas repasar?",
      "texto": "Vuelve a ver esta guía cuando quieras con el botón Ayuda del menú."
    }
  ]
};

export default GUIAS;
