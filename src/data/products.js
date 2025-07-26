import { FaBreadSlice, FaCookie, FaCoffee, FaHeart, FaAward } from 'react-icons/fa';
import { IoRestaurant } from 'react-icons/io5';

export const products = [
  { 
    icon: FaBreadSlice, 
    name: "Panes Artesanales", 
    desc: "Horneados frescos cada día con masa madre tradicional",
    price: "Desde $3.50",
    popular: true,
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
  },
  { 
    icon: FaCookie, 
    name: "Pasteles & Tartas", 
    desc: "Dulces tentaciones con ingredientes premium y decoración artística",
    price: "Desde $25.00",
    popular: false,
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
  },
  { 
    icon: FaCoffee, 
    name: "Croissants", 
    desc: "Crujientes por fuera, mantecosos por dentro, técnica francesa auténtica",
    price: "Desde $4.00",
    popular: true,
    image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
  },
  { 
    icon: IoRestaurant, 
    name: "Dulces Variados", 
    desc: "Perfectos para acompañar tu café matutino o merienda",
    price: "Desde $2.50",
    popular: false,
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
  },
  { 
    icon: FaHeart, 
    name: "Café Premium", 
    desc: "Granos seleccionados de origen, tostados artesanalmente para el sabor perfecto",
    price: "Desde $8.00",
    popular: false,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
  },
  { 
    icon: FaAward, 
    name: "Especialidades", 
    desc: "Creaciones únicas del chef, productos de temporada y ediciones limitadas",
    price: "Desde $6.00",
    popular: true,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=250&fit=crop&crop=center&auto=format&q=80"
  }
];
