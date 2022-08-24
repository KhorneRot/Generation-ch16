import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {
        //List-- ArrayList
        //Los valores se ordenan segun el orden en que los agreguemos
        //permiten tener valores duplicados
        //Es una coleccion de objetos

        List<String> meses = new ArrayList<String>();

        meses.add("Enero");
        meses.add("febrero");
        meses.add("Marzo");
        meses.add("Abril");

        // String mes = meses.remove();

        System.out.println(meses);
        System.out.println(meses.get(0));
        System.out.println(meses.size());

        for (String elemento : meses) {
            System.out.println(elemento);
        }
        //list<int> numeros = new ArrayList<int>();


        // clases envolventes o wrapper
        int num1 = 10;
        Integer num2 = 10;


        System.out.println(num1 + 10);
        System.out.println(num1 + 5);
        System.out.println(num2.getClass().getSimpleName());
        List<Integer> numeros = new ArrayList<Integer>();
        numeros.add(2);
        numeros.add(500);
        numeros.add(98);
        numeros.add(90);

        System.out.println(numeros);



    }

}
