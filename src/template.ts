/**
 * @author WMXPY
 * @namespace Module_Template
 * @description Template
 */

import { Activity, IHomingPigeonModule } from "homing-pigeon";

export class TemplateModule implements IHomingPigeonModule {

    public shouldAbort(activity: Activity): boolean {

        return true;
    }

    public validate(activity: Activity): boolean {

        return false;
    }

    public async execute(activity: Activity): Promise<boolean> {

        return false;
    }
}
