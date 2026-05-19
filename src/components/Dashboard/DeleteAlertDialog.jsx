"use client";

import React from "react";
import { AlertDialog, Button } from "@heroui/react";
import { CencelAppointmentFunc } from "@/lib/backendData";

const DeleteAlertDialog = ({ _id, doctorName }) => {
  const appointmentId = _id;
  return (
    <div>
      <AlertDialog>
        <Button variant="danger-soft" className="text-sm border rounded-xl">
          Cencel
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>Cencel Appoinment</AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will cencel <strong>{doctorName}</strong> appoinment.
                  This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary" className="rounded-lg">
                  Back
                </Button>
                <Button
                  onClick={() => CencelAppointmentFunc(appointmentId)}
                  type="submit"
                  slot="close"
                  variant="danger-soft"
                  className="rounded-lg"
                >
                  Cencel Appointment
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteAlertDialog;
