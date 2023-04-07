import { User } from "../../interfaces/user/user.interface"

export interface UserListProps {
    users: User[];
}

export const UserList = (props: UserListProps) => {
    const { users } = props;

    return (
        <div className="flex">
            <ul role="list">
                {
                    users.map((user, index) => (
                        <li key={index} className="group/item hover:bg-slate-100">
                            <img src={user.avatar} alt="" />
                            <div>
                                <div>{user.firstname}</div>
                                <p>{user.lastname}</p>
                            </div>
                                <a className="group/edit invisible hover:bg-slate-200 group-hover/item:visible" href="#">
                                <span className="group-hover/edit:text-gray-700">Call</span>
                                <svg className="group-hover/edit:translate-x-0.5 group-hover/edit:text-slate-500">
                                </svg>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}