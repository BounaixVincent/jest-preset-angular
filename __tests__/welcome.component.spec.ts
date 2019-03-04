import { TestBed } from "@angular/core/testing";
import { WelcomeComponent } from "../src/welcome.component";
import { UserService } from "../src/user.service";
import { Injectable} from "@angular/core";

class MockUserService {
    isLoggedIn = true;
    user = { name: 'Test User'};
};
// let mockUserService: {
//     isLoggedIn: boolean;
//     user: { name: string}
// };

describe('Testing component', () => {

    let comp;
    let userService;
    beforeEach(() => {
        // MockUserService = {
        //     isLoggedIn: true,
        //     user: { name: 'Test User'}
        // };
        TestBed.configureTestingModule({
            // provide the component-under-test and dependent service
            providers: [
                WelcomeComponent,
                { provide: UserService, useClass: MockUserService }
            ]
        });
        // inject both the component and the dependent service.
        comp = TestBed.get(WelcomeComponent);
        userService = TestBed.get(UserService);
    });

    it('should not have welcome message after construction', () => {
        expect(comp.welcome).toBeUndefined();
    });

    it('should welcome logged in user after Angular calls ngOnInit', () => {
        comp.ngOnInit();
        expect(comp.welcome).toContain(userService.user.name);
    });

    it('should ask user to log in if not logged in after ngOnInit', () => {
        userService.isLoggedIn = false;
        comp.ngOnInit();
        expect(comp.welcome).not.toContain(userService.user.name);
        expect(comp.welcome).toContain('log in');
    });
});