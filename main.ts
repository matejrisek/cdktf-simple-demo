// Copyright (c) HashiCorp, Inc
// SPDX-License-Identifier: MPL-2.0
import { Construct } from "constructs";
import { App, TerraformOutput, TerraformStack } from "cdktf";
import { RandomProvider } from "@cdktf/provider-random/lib/provider";
import { Pet } from "@cdktf/provider-random/lib/pet";

class MyStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    
    console.log("ok234");

    // define resources here
    new RandomProvider(this, "random");
    const pet = new Pet(this, "pet", {});
    new TerraformOutput(this, "pet_name", {
      value: pet.id,
    });
  }
}

const app = new App();
new MyStack(app, "cdktf-simple-demo");
app.synth();
