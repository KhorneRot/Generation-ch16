import java.util.Scanner;

public class Edad {
    public static void main(String[] args) {
        System.out.println("Esta es la clase edad");

        // Determinar si una persona en mayor de edad
        // tener la edad - pedir al usuario
        // Condicional para saber si es menor de 18

        //let nombre = prompt("Escribre tu edad")
        Scanner escaner = new Scanner(System.in); // instanciar
        System.out.println("Escribre tu edad: ");
        int edad =  escaner.nextInt();
        escaner.close();  // cuando ya no se necesita leer más datos


        // if else
        if(edad >= 18){
            System.out.println("Eres mayor de edad");
        }else {
            System.out.println("Eres menor de edad");
        }



        // Operador ternario
        String resultado = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";

    }

}


