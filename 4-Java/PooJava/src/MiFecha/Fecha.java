package MiFecha;

public class Fecha {

     private int dia;
     private int mes;
     private int año;

public Fecha(){};

    public Fecha(int dia, int mes, int año) {
        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }
    public int getDia() {
            return dia;
    }

    public int getMes() {
            return mes;
    }

    public int getAño() {
            return año;
    }

    public String formF(){
        return getDia() + "/" + getMes() + "/" + getAño() ;
    }



}

