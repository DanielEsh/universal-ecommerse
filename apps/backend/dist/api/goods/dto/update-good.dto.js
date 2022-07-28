"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateGoodDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_good_dto_1 = require("./create-good.dto");
class UpdateGoodDto extends (0, mapped_types_1.PartialType)(create_good_dto_1.CreateGoodDto) {
}
exports.UpdateGoodDto = UpdateGoodDto;
//# sourceMappingURL=update-good.dto.js.map