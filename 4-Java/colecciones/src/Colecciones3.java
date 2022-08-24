import java.util.*;

public class Colecciones3 {
    public static void main(String[] args) {

        //inter - Integer
        //char -> Character
        //float -> Float
        //double -> Double


        System.out.println("Arraylist");
        List<String> comidas = new ArrayList<String>();
        comidas.add("Pozole");
        comidas.add("Tostadas");
        comidas.add("Ceviche");
        comidas.add(2,"Esquite");


        System.out.println(comidas);
        // otra forma de inicializar una lista
        List<Integer> numeros = new ArrayList<Integer>(Arrays.asList(1, 2, 3, 56, 789));
        System.out.println(numeros);

        System.out.println("-------------------");
        System.out.println("HashSet");

        Set<String> ciudades = new HashSet<String>();
        ciudades.add("CDMX");
        ciudades.add("GDL");
        ciudades.add("MTY");

        System.out.println(ciudades);

        //Otra forma de crear un set HashSet
        Set<Boolean> verdad = new HashSet<Boolean>(Arrays.asList(true, false, false, true));

        System.out.println(verdad);



        System.out.println("-------------------");
        System.out.println("HashMap");

        //Nos permite guardar pares de valores
        // llave : valor
        // hashMap<Llave, Valor>


        Map<Integer, String> alumno = new HashMap<Integer, String>();

        alumno.put(1, "Pedro");
        alumno.put(2, "Sofia");
        alumno.put(3, "Salma");
        alumno.put(4, "Miguel");


        System.out.println(alumno);
        System.out.println(alumno.size());
        System.out.println(alumno.values()); //Lista de valores
        System.out.println(alumno.keySet()); //Lista de las llaves
        System.out.println(alumno.get(2));


        for(int i=0; i<alumno.size(); i++){

            Object llaves = alumno.keySet().toArray()[i];
            System.out.println(alumno.get(llaves));


        }

        for(Integer llave : alumno.keySet()){
            System.out.println(llave + " - " + alumno.get(llave));
        }



    }
}
