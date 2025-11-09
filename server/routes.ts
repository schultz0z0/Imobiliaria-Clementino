import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertServiceInterestSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/service-interest", async (req, res) => {
    try {
      const validationResult = insertServiceInterestSchema.safeParse(req.body);

      if (!validationResult.success) {
        const validationError = fromZodError(validationResult.error);
        return res.status(400).json({ 
          error: validationError.message,
          details: validationResult.error.issues
        });
      }

      const serviceInterest = await storage.createServiceInterest(validationResult.data);

      console.log("Service Interest Created:", serviceInterest);

      return res.status(200).json({ 
        success: true,
        message: "Formulário enviado com sucesso",
        data: serviceInterest
      });
    } catch (error) {
      console.error("Error processing service interest:", error);
      return res.status(500).json({ 
        error: "Erro ao processar solicitação" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
