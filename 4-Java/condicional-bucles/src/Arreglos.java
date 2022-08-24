import java.util.Arrays;

public class Arreglos {
    public static void main(String[] args) {
        System.out.println("Arreglos");

    //Arreglos
    // no se pueden mezclar tipos de datos

    int[] numerosAleatorios = {1,2,3,4,5,6};
    String[] valores = {"Hola","Adios","etc"};

    //byte otrosNumeros[] = {1,2,3};


    // Los arreglos tienen un tamaño definido
    char[] caracteres = new char [4];
        caracteres[0] = 'h';
        caracteres[1] = 'o';
        caracteres[2] = 'l';
        caracteres[3] = 'a';


        System.out.println(numerosAleatorios[1]);
        System.out.println(caracteres);
        System.out.println(valores[2]);



        // for each
        for(String elemento : valores){
            System.out.println(elemento);

        }

        for(int numero : numerosAleatorios){
            System.out.println(numero);
        }

    }
}