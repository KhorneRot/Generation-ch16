import java.util.Objects;
import java.util.Scanner;

public class Bucles {
    public static void main(String[] args) {

        for(byte i=0; i<10; i++ ){
            System.out.println(i);

        }

        // while
        // bucle no controlado

        // Mientras la concidion sea verdadera
        String condicion = "";
        Scanner sc = new Scanner(System.in);


        while(!Objects.equals(condicion, "Hola")){

            System.out.println("Saludame");
            condicion = sc.next();
        }



        // El do while es igual al while
        // El do while ejecuta la accion aunque sea una vez
        do {
            System.out.println("Saludame x2");
            condicion = sc.next();
        }while(!Objects.equals(condicion, "Hola"));





    }
}
