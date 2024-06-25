import React, { createContext, useContext, useState, ReactNode } from "react";

interface CompraContextType {
  dni: number;
  pack_id: number;
  method: string;
  amount: number;
  receipt: string;
  updateCompra: (updates: Partial<CompraContextType>) => void;
}

const CompraContext = createContext<CompraContextType | undefined>(undefined);

const CompraProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [compra, setCompra] = useState<CompraContextType>({
    dni: 23444,
    pack_id: 0,
    method: "",
    amount: 0,
    receipt: "",
    updateCompra: (updates) => setCompra((prev) => ({ ...prev, ...updates })),
  });

  return (
    <CompraContext.Provider value={compra}>{children}</CompraContext.Provider>
  );
};

const useCompra = () => {
  const context = useContext(CompraContext);
  if (!context) {
    throw new Error("useCompra must be used within a CompraProvider");
  }
  return context;
};

export { CompraProvider, useCompra };
