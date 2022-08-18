    public class EjemploVariables {
        public static void main(String[] args) {
            String nombre= "Alejandro";
            String saludo = " Hola esto es ejemplo de variables";

            System.out.println(saludo + " " + nombre);
            char espacio = '\u0040';
            char caracter = 'a';
            System.out.println("espacio = " + espacio);

            int numeroEntero = 2;
            System.out.println("numeroEntero = " + numeroEntero);
            System.out.println("int corresponde en byes: " + Character.BYTES);
            System.out.println("char corresponde en bits: " + Character.SIZE);
            System.out.println("char valor maximo: " + Character.MAX_VALUE);
            System.out.println("char valor minimo: " + Character.MIN_VALUE);

            //int numeroEntero = 3;
            System.out.println("numeroEntero = " + numeroEntero);
            System.out.println("int corresponde en byes: " + Integer.BYTES);
            System.out.println("char corresponde en bits: " + Integer.SIZE);
            System.out.println("char valor maximo: " + Integer.MAX_VALUE);
            System.out.println("char valor minimo: " + Integer.MIN_VALUE);

            float numeroFloat = 0.00000000015f; // 1.5e-10f
            System.out.println("numeroFloat = " + numeroFloat);
            System.out.println("numeroEntero = " + numeroEntero);
            System.out.println("int corresponde en byes: " + Float.BYTES);
            System.out.println("float corresponde en bits: " + Float.SIZE);
            System.out.println("float valor maximo: " + Float.MAX_VALUE);
            System.out.println("float valor minimo: " + Float.MIN_VALUE);

            double numeroDouble = 3.444567E39;
            System.out.println("numeroDouble = " + numeroDouble);
            System.out.println("numeroFloat = " + numeroFloat);
            System.out.println("numeroEntero = " + numeroEntero);
            System.out.println("int corresponde en byes: " + Double.BYTES);
            System.out.println("Double corresponde en bits: " + Double.SIZE);
            System.out.println("Double valor maximo: " + Double.MAX_VALUE);
            System.out.println("Double valor minimo: " + Double.MIN_VALUE);


            boolean valorBoolean =(3-2 == 1);
            System.out.println("valorBoolean = " + valorBoolean);

            long valorLong = 1;
            System.out.println("numeroDouble = " + numeroDouble);
            System.out.println("numeroFloat = " + numeroFloat);
            System.out.println("numeroEntero = " + numeroEntero);
            System.out.println("long corresponde en byes: " + Long.BYTES);
            System.out.println("long corresponde en bits: " + Long.SIZE);
            System.out.println("long valor maximo: " + Long.MAX_VALUE);
            System.out.println("long valor minimo: " + Long.MIN_VALUE);

            byte valorByte = 1;
            System.out.println("valorByte = " + valorByte);
            System.out.println("numeroDouble = " + numeroDouble);
            System.out.println("numeroFloat = " + numeroFloat);
            System.out.println("numeroEntero = " + numeroEntero);
            System.out.println("Byte corresponde en byes: " + Byte.BYTES);
            System.out.println("Byte corresponde en bits: " + Byte.SIZE);
            System.out.println("Byte valor maximo: " + Byte.MAX_VALUE);
            System.out.println("Byte valor minimo: " + Byte.MIN_VALUE);

            short valorShort = 1;
            System.out.println("valorShort = " + valorShort);
            System.out.println("numeroDouble = " + numeroDouble);
            System.out.println("numeroFloat = " + numeroFloat);
            System.out.println("numeroEntero = " + numeroEntero);
            System.out.println("Short corresponde en byes: " + Short.BYTES);
            System.out.println("Short corresponde en bits: " + Short.SIZE);
            System.out.println("Short valor maximo: " + Short.MAX_VALUE);
            System.out.println("Short valor minimo: " + Short.MIN_VALUE);


            var miVar = 2;
            System.out.println("miVar = " + miVar);

        }
    }
