import { createContext, useContext, useState, ReactNode } from "react";

interface Compra {
  dni?: number;
  pack_id?: number;
  method?: "efectivo" | "transferencia";
  amount?: number;
  receipt?: string;
}

interface CompraContextType {
  compra: Compra;
  updateCompra: (data: Partial<Compra>) => void;
}

const CompraContext = createContext<CompraContextType | undefined>(undefined);

export const CompraProvider = ({ children }: { children: ReactNode }) => {
  const [compra, setCompra] = useState<Compra>({});

  const updateCompra = (data: Partial<Compra>) => {
    setCompra((prev) => ({ ...prev, ...data }));
  };

  return (
    <CompraContext.Provider value={{ compra, updateCompra }}>
      {children}
    </CompraContext.Provider>
  );
};

export const useCompra = () => {
  const context = useContext(CompraContext);
  if (context === undefined) {
    throw new Error("useCompra must be used within a CompraProvider");
  }
  return context;
};
