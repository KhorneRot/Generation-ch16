package MiejemploJava;

public class EjemploPersona {
    public static void main(String[] args) {
        Persona p = new Persona("Alets", 25, 123);
        p.setNombre("Diego");
        p.setEdad(25);
        p.setNss(123);
       System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNombre());
       System.out.println("el valor de la variable de instancia p.nombre -> " + p.getEdad());
       System.out.println("el valor de la variable de instancia p.nombre -> " + p.getNss());

    }
}
