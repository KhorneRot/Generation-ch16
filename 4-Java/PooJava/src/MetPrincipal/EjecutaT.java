package MetPrincipal;

import MenuP.MenuOp;
import MiFecha.Fecha;
import MiSaludo.Saludo;
import MiejemploJava.Persona;

import java.util.Scanner;

public class EjecutaT {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        MenuOp menuOp = new MenuOp();
        menuOp.menu();
        System.out.print("Elija una opción ->");

        int op = sc.nextInt();

        do {

        switch (op){
            case 1:
                Saludo s = new Saludo();
                s.saludar();
                System.out.println(s.saludar0());
                break;
            case 2:
                Persona p = new Persona();
                p.setNombre("Diego");
                p.setEdad(25);
                p.setNss(123);
                System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
                System.out.println("el valor de la variable de instancia p.nombre -> " + p.getEdad());
                System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNss());
                break;

            case 3:
                Fecha f = new Fecha(20, 9, 1996);

                System.out.println(f.formF());
                break;
            case 4:
                System.out.println("aqui va la actividad del día");
                break;
            default:
                System.out.println("opción no valida--> '1-4'");



                }

        }while (4<0);
    }
}
