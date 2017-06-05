package org.bisun.persistence;

import org.bisun.domain.StoreVO;
import org.bisun.dto.LoginDTO;

public interface StroreDAO {

	public StoreVO login(LoginDTO dto)throws Exception;
}
